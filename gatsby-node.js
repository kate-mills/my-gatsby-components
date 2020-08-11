const path = require(`path`)
const axios = require(`axios`)

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    axios
      .get(`https://kate-mills.github.io/mcc-product-list/products.json`)
      .then(result => {
        const { data } = result

        createPage({
          path: `/search`,
          component: path.resolve(`./src/templates/ClientSearchTemplate.js`),
          context: {
            productData: {
              allProducts: data.products,
              options: {
                indexStrategy: `Prefix match`,
                searchSanitizer: `Lower Case`,
                NameIndex: true,
                CategoryIndex: true,
                SearchByTerm: true,
              },
            },
          },
        })
        resolve()
      })
      .catch(err => {
        console.log(`====================================`)
        console.log(`error creating Page:${err}`)
        console.log(`====================================`)
        reject(new Error(`error on page creation:\n${err}`))
      })
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = `/app/*`

    // Update the page.
    createPage(page)
  }
}



exports.createPages = async({ graphql, actions  }) => {
  const {createPage} = actions

  const result = await graphql(`
  query GetProducts{
    products:allContentfulMccProduct{
      nodes{
        slug
      }
    }
  }`)

  result.data.products.nodes.forEach((product) => {
    createPage({
      path: `/products/${product.slug}`,
      component: path.resolve(`src/templates/product-template.js`),
      context: {slug: product.slug}
    })
  })
}

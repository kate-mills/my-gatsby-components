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

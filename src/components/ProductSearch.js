import React, { Component } from "react"
import Axios from "axios"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styles from "../css/productsearch.module.css"
import * as JsSearch from "js-search"


class Search extends Component {
  state = {
    productList: [],
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: "",
  }

  /** React lifecycle method to fetch the data */
  async componentDidMount() {
    Axios.get("https://kate-mills.github.io/mcc-product-list/products.json")
      .then(result => {
        const productData = result.data
        this.setState({ productList: productData.products })
        this.rebuildIndex()
        console.log('productList', productData);
      })
      .catch(err => {
        this.setState({ isError: true })
        console.log("====================================")
        console.log(`Something bad happened while fetching the data\n${err}`)
        console.log("====================================")
      })
  }
  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const { productList } = this.state
    const dataToSearch = new JsSearch.Search("contentful_id")

    /** defines a indexing strategy for the data more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy */

    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    
    /** defines the sanitizer for the search to prevent some of the words from being excluded */

    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()

    /** defines the search index read more in here https://github.com/bvaughn/js-search#configuring-the-search-index */

    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("contentful_id")

    dataToSearch.addIndex("name") // sets the index attribute for the data
    dataToSearch.addIndex("category") // sets the index attribute for the data

    dataToSearch.addDocuments(productList) // adds the data to be searched
    this.setState({ search: dataToSearch, isLoading: false })
  }

  /** handles the input change and perform a search with js-search in which the results will be added to the state */

  searchData = e => {
    const { search } = this.state
    const queryResult = search.search(e.target.value)
    this.setState({ searchQuery: e.target.value, searchResults: queryResult })
  }
  handleSubmit = e => {
    e.preventDefault()
  }
  formReset = e => {
    console.log('reset e:', e)
  }
  render() {
    const { searchResults, searchQuery } = this.state
    const queryResults = searchQuery === "" ? [] : searchResults
    return (
      <div>
        <div style={{ margin: "0 auto" }}>
          <form onSubmit={this.handleSubmit}>
            <div className={styles.search__flex}>
            <input
              tabIndex={`0`}
              autoComplete="off"
              id="Search"
              onChange={this.searchData}
              placeholder="Search..." 
              type="text"
              className={styles.search__form__input}
              value={searchQuery} />
            </div>
          </form>
          <div>
            <table className={styles.search__table} >
              { queryResults.length?
              <thead className={styles.search__thead}>
                <tr>
                  <th className={styles.search__th}>
                      Products found: {queryResults.length}
                  </th>
                  <th className={styles.search__th}>Product Category</th>
                </tr>
              </thead>: false
              }
              <tbody>
                {queryResults.map(item => {
                  return (
                    <tr key={`row_${item.contentful_id}`}> 
                      <td className={styles.search__td}>
                        <AniLink fade to={`/products/${item.slug}`}>{item.name}</AniLink>
                      </td>
                      <td className={styles.search__td}>
                        {
                        item.category.indexOf(' ') === -1 ? 
                        
                          <AniLink fade to={`/${item.category}`}>{item.category}</AniLink>
                          :
                          <AniLink fade to={`/${item.category.replace(' & ', '-')}`}>{item.category}</AniLink>
                        }
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
    </div>
    )
  }
}
export default Search


import React, { Component } from "react"
import Axios from "axios"
import AniLink from "gatsby-plugin-transition-link/AniLink";
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
  /**
   * React lifecycle method to fetch the data
   */
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
    /**
     *  defines a indexing strategy for the data
     * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    /**
     * defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
     */
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("contentful_id")

    dataToSearch.addIndex("name") // sets the index attribute for the data
    dataToSearch.addIndex("category") // sets the index attribute for the data

    dataToSearch.addDocuments(productList) // adds the data to be searched
    this.setState({ search: dataToSearch, isLoading: false })
  }

  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = e => {
    const { search } = this.state
    const queryResult = search.search(e.target.value)
    this.setState({ searchQuery: e.target.value, searchResults: queryResult })
  }
  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    //const { productList, searchResults, searchQuery } = this.state
    const { searchResults, searchQuery } = this.state
    const queryResults = searchQuery === "" ? [] : searchResults
    return (
      <div>
        <div style={{ margin: "0 auto" }}>
          <form onSubmit={this.handleSubmit}>
            <div style={{ margin: "0 auto", display: "flex" }}>
            <input
              tabIndex={`0`}
              autoComplete="off"
              id="Search"
              onChange={this.searchData}
              placeholder="Search..." 
              type="text"
              style={{ margin: "0 auto 50px auto"}} 
              value={searchQuery} />
            </div>
          </form>
          <div>
            {queryResults.length? `Number of items: ${queryResults.length}`:false}
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                borderRadius: "4px",
                border: "1px solid #d3d3d3",
              }}
            >
              { queryResults.length?
              <thead style={{ border: "1px solid #808080" }}>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "5px",
                      fontSize: "14px",
                      fontWeight: 600,
                      borderBottom: "2px solid #d3d3d3",
                      cursor: "pointer",
                    }}
                  >
                    Product Id
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "5px",
                      fontSize: "14px",
                      fontWeight: 600,
                      borderBottom: "2px solid #d3d3d3",
                      cursor: "pointer",
                    }}
                  >
                    Product Name
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "5px",
                      fontSize: "14px",
                      fontWeight: 600,
                      borderBottom: "2px solid #d3d3d3",
                      cursor: "pointer",
                    }}
                  >
                    Product Category
                  </th>
                </tr>
              </thead>: false
              }

              <tbody>
                {queryResults.map(item => {
                  return (
                    <tr key={`row_${item.contentful_id}`}>
                      <td
                        style={{
                          fontSize: "14px",
                          border: "1px solid #d3d3d3",
                        }}
                      >
                        {item.contentful_id}
                      </td>
                      <td
                        style={{
                          fontSize: "14px",
                          border: "1px solid #d3d3d3",
                        }}
                      >
                      <AniLink fade to={`/products/${item.slug}`}>{item.name}</AniLink>
                      </td>
                      <td
                        style={{
                          fontSize: "14px",
                          border: "1px solid #d3d3d3",
                        }}
                      >
                        {item.category}
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

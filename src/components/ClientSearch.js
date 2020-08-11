import React, { Component } from "react"
import * as JsSearch from "js-search"

class ClientSearch extends Component {
  state = {
    isLoading: true,
    searchResults: [],
    search: null,
    isError: false,
    indexByName: false,
    indexByCategory: false,
    termFrequency: true,
    removeStopWords: false,
    searchQuery: ``,
    selectedStrategy: ``,
    selectedSanitizer: ``,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.search === null) {
      const { engine } = nextProps
      return {
        indexByName: engine.NameIndex,
        indexByCategory: engine.CategoryIndex,
        termFrequency: engine.SearchByTerm,
        selectedSanitizer: engine.searchSanitizer,
        selectedStrategy: engine.indexStrategy,
      }
    }
    return null
  }
  async componentDidMount() {
    this.rebuildIndex()
  }

  rebuildIndex = () => {
    const {
      selectedStrategy,
      selectedSanitizer,
      removeStopWords,
      termFrequency,
      indexByName,
      indexByCategory,
    } = this.state
    const { products } = this.props
    const dataToSearch = new JsSearch.Search(`contentful_id`)
    if (removeStopWords) {
      dataToSearch.tokenizer = new JsSearch.StopWordsTokenizer(
        dataToSearch.tokenizer
      )
    }
    if (selectedStrategy === `All`) {
      dataToSearch.indexStrategy = new JsSearch.AllSubstringsIndexStrategy()
    }
    if (selectedStrategy === `Exact match`) {
      dataToSearch.indexStrategy = new JsSearch.ExactWordIndexStrategy()
    }
    if (selectedStrategy === `Prefix match`) {
      dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    }
    /* eslint-disable */
    selectedSanitizer === `Case Sensitive`
      ? (dataToSearch.sanitizer = new JsSearch.CaseSensitiveSanitizer())
      : (dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer())

    termFrequency === true
      ? (dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex(
          `contentful_id`
        ))
      : (dataToSearch.searchIndex = new JsSearch.UnorderedSearchIndex())
    /* eslint-enable */
    if (indexByName) {
      dataToSearch.addIndex(`name`)
    }
    if (indexByCategory) {
      dataToSearch.addIndex(`category`)
    }
    dataToSearch.addDocuments(products)
    this.setState({ search: dataToSearch, isLoading: false })
  }
  searchData = e => {
    const { search } = this.state
    const queryResult = search.search(e.target.value)
    this.setState({ searchQuery: e.target.value, searchResults: queryResult })
  }
  handleSubmit = e => {
    e.preventDefault()
  }
  render() {
    const { isLoading, isError, searchResults, searchQuery } = this.state
    const { products } = this.props
    const queryResults = searchQuery === `` ? products : searchResults
    if (isLoading) {
      return (
        <div>
          <h1 style={{ marginTop: `3em` }}>Getting the search all setup</h1>
        </div>
      )
    }
    if (isError) {
      return (
        <div>
          <h1 style={{ marginTop: `3em`, textAlign: `center` }}>Ohh no!!!!!</h1>
          <h3
            style={{
              marginTop: `2em`,
              padding: `2em 0em`,
              textAlign: `center`,
            }}
          >
            Something really bad happened
          </h3>
        </div>
      )
    }
    return (
      <div>
        <div style={{ margin: `0 auto` }}>
          <form name="search-form" onSubmit={this.handleSubmit}>
            <div style={{ display: `flex`, margin: `0 auto` }}>
              <input
                id="Search"
                autoComplete="off"
                value={searchQuery}
                onChange={this.searchData}
                placeholder="Enter your search here"
                style={{
                  margin: `0 auto`,
                  width: `400px`,
                  height: `30px`,
                  padding: `5px`,
                }}
              />
            </div>
          </form>
          <div>
            <p
              style={{
                color: `white`,
                fontSize: `15px`,
              }}
            >
              Number of items: {queryResults.length}
            </p>
            <table
              style={{
                width: `100%`,
                borderCollapse: `collapse`,
                borderRadius: `4px`,
                border: `1px solid #d3d3d3`,
                background: `white`,
                color: `var(--mainBlack)`,
              }}
            >
              <thead style={{ border: `1px solid #808080` }}>
                <tr>
                  <th
                    style={{
                      textAlign: `left`,
                      padding: `5px`,
                      fontSize: `16px`,
                      fontWeight: 600,
                      borderBottom: `2px solid #d3d3d3`,
                      cursor: `pointer`,
                    }}
                  >
                    Product ID
                  </th>
                  <th
                    style={{
                      textAlign: `left`,
                      padding: `5px`,
                      fontSize: `16px`,
                      fontWeight: 600,
                      borderBottom: `2px solid #d3d3d3`,
                      cursor: `pointer`,
                    }}
                  >
                    Product Name
                  </th>
                  <th
                    style={{
                      textAlign: `left`,
                      padding: `5px`,
                      fontSize: `16px`,
                      fontWeight: 600,
                      borderBottom: `2px solid #d3d3d3`,
                      cursor: `pointer`,
                    }}
                  >
                    Product Category
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* eslint-disable */}
                {queryResults.map(item => {
                  return (
                    <tr key={`row_${item.contentful_id}`}>
                      <td
                        style={{
                          fontSize: `16px`,
                          border: `1px solid #d3d3d3`,
                          padding: `5px`,
                        }}
                      >
                        {item.contentful_id}
                      </td>
                      <td
                        style={{
                          fontSize: `16px`,
                          border: `1px solid #d3d3d3`,
                        }}
                      >
                        {item.name}
                      </td>
                      <td
                        style={{
                          fontSize: `16px`,
                          border: `1px solid #d3d3d3`,
                        }}
                      >
                        {item.category}
                      </td>
                    </tr>
                  )
                })}
                {/* eslint-enable */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
export default ClientSearch

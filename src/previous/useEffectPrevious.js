import React from "react"

import Spinner from "./Spinner"

class ExampleUE extends React.Component {
  state = {
    url: ''
  }

  /**
   * Fetch a random dog photo and save its URL in our state
   */
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then(data => this.setState({
        url: data.message
      }))
  }

  render() {
    return (
      <>
        <h1>useEffect example</h1>
        {this.state.url !== '' ? <img src={this.state.url} alt="dog"/> : <Spinner />}
      </>
    )
  }
}

export default ExampleUE

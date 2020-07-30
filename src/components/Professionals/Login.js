import React from "react"
import { navigate } from "gatsby"
import Form from "./Form"
import { handleLogin, isLoggedIn } from "../../utils/auth"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  componentDidMount() {
    document.getElementsByTagName("input")[0].focus()
  }

  handleSubmit(event) {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/treatment-protocol-videos`)
    }

    return (
        <Form
          handleUpdate={e => this.handleUpdate(e)}
          handleSubmit={e => this.handleSubmit(e)}
        />
    )
  }
}

export default Login

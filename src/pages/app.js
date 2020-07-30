import React from "react"
import { Router } from "@reach/router"

import TreatmentPV from "../components/Professionals/TreatmentPV"

import Layout from "../components/layout"
import Login from "../components/Professionals/Login"
import PrivateRoute from "../components/Professionals/PrivateRoute"

const App = () => {
  return (
    <Layout>
      <Router primary={false}>
        <PrivateRoute path="/app/treatment-protocol-videos" component={TreatmentPV} />
        <Login path="/app/login" />
      </Router>
    </Layout>
  )
}
export default App

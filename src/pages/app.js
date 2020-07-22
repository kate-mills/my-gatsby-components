import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Profile from "../components/Professionals/Profile"

import Articles from "../components/Professionals/Articles"
import TreatmentPV from "../components/Professionals/TreatmentPV"
import UpcomingClasses from "../components/Professionals/UpcomingClasses"
import ProductImagesLogos from "../components/Professionals/ProductImagesLogos"

import Login from "../components/Professionals/Login"
import PrivateRoute from "../components/Professionals/PrivateRoute"

const App = () => {
  return (
    <Layout>
      <Router primary={false}>
        <PrivateRoute path="/app/profile" component={Profile} />

        <PrivateRoute
          path="/app/upcoming-classes"
          component={UpcomingClasses}
        />
        <PrivateRoute path="/app/articles" component={Articles} />
        <PrivateRoute
          path="/app/treatment-protocol-videos"
          component={TreatmentPV}
        />
        <PrivateRoute
          path="/app/product-images-and-logos"
          component={ProductImagesLogos}
        />
        <Login path="/app/login" />
      </Router>
    </Layout>
  )
}
export default App

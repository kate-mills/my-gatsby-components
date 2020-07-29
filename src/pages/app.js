import React from "react"
import { Router } from "@reach/router"
import Profile from "../components/Professionals/Profile"

import Articles from "../components/Professionals/Articles"
import TreatmentPV from "../components/Professionals/TreatmentPV"
import UpcomingClasses from "../components/Professionals/UpcomingClasses"
import ProductImagesLogos from "../components/Professionals/ProductImagesLogos"

import Login from "../components/Professionals/Login"
import PrivateRoute from "../components/Professionals/PrivateRoute"

const App = () => {
  return (
      <Router primary={false}>
        <PrivateRoute path="/app/profile" component={Profile} />

        <PrivateRoute
          path="/app/upcoming-classes"
          title="Professionals - Upcoming Classes"
          component={UpcomingClasses}
        />
        <PrivateRoute path="/app/articles" 
          title="Professionals - Articles"
        component={Articles} />

        <PrivateRoute
          path="/app/treatment-protocol-videos"
          title="Professionals - Treatment Protocol Videos"
          component={TreatmentPV}
        />
        <PrivateRoute
          path="/app/product-images-and-logos"
          title="Professionals - Product Images & Logos"
          component={ProductImagesLogos}
        />
        <Login path="/app/login" />
      </Router>
  )
}
export default App

import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { isLoggedIn } from "../../utils/auth"
import PageModel from "../PageModel"

const PrivateRoute = ({ component: Component, location, title, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    navigate(`/app/login`)
    return null
  }

  return(


    <PageModel title={title}>
<Component {...rest} />
    </PageModel>
  ) 
    
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute

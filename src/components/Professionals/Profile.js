import React from "react"
import View from "./View"
import { getCurrentUser } from "../../utils/auth"
import Header from './Header'


const Profile = () => {
  const { name } = getCurrentUser()

  return (
    <>
      <Header/>
    <View title="Michele Corley Professionals">
      <p>Welcome back, {name}!</p>
      <p>
      </p>
    </View>
    </>
  )
}

export default Profile

import React from "react"
import styles from "./form.module.css"
import { navigate } from "@reach/router"
import SEO from "../../seo"
import Email from "../../Email"

export default ({ handleSubmit, handleUpdate }) => (
  <>
    <SEO title={`Professionals Login`}/>
    <p className={styles[`form__instructions`]}>
      Professionals, please contact us at{" "}
      <span className={styles[`phone`]}>
        707{`.`}637{`.`}4996
      </span>{" "}or{" "}<Email subject="Professional login and password" fontWeight="600"/>{" "}
      to get access to our exclusive information.
    </p>
    <form
      className={styles.form}
      method="post"
      onSubmit={event => {
        handleSubmit(event)
        navigate(`/app/professionals`)
      }}
    >
      <label htmlFor="username" className={styles[`form__label`]}>
        Username
        <input
          className={styles[`form__input`]}
          type="text"
          name="username"
          onChange={handleUpdate}
        />
      </label>
      <label htmlFor="password" className={styles[`form__label`]}>
        Password
        <input
          className={styles[`form__input`]}
          type="password"
          name="password"
          onChange={handleUpdate}
        />
      </label>
      <input className={styles[`form__button`]} type="submit" value="Log In" />
    </form>
  </>
)

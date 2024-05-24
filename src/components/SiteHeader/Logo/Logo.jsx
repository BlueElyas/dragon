import React from "react"
import styles from "./Logo.module.css"
import { NavLink } from "react-router-dom"

function Logo() {
  return (
    <div className={styles.logo}>
      <NavLink to="/" className={styles.navLink}>
        <img src="assets/dragon-logo.png" alt="cartoonish dragon logo" />
        <h3>Ask DargonAI </h3>
      </NavLink>
    </div>
  )
}

export default Logo

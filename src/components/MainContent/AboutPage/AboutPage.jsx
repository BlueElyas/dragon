import React from "react"
import { Outlet } from "react-router"
import { NavLink } from "react-router-dom"
import styles from "./AboutPage.module.css"

function AboutPage() {
  return (
    <div>
      <div className={styles.container}>
        <NavLink className={`${styles.aboutNav} ${styles.active}`} to="team">
          Team
        </NavLink>
        <NavLink className={`${styles.aboutNav} ${styles.inactive}`} to="app">
          App
        </NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default AboutPage

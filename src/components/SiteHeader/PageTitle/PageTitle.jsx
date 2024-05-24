import React from "react"
import styles from "./PageTitle.module.css"
import { useLocation } from "react-router"

function PageTitle() {
  const location = useLocation()
  const pathname = location.pathname

  if (pathname === "/") {
    return (
      <div className={styles.pageTitle}>
        <h1>Enter the Dagron-verse</h1>
        <p>
          Welcome to the ultimate fantasy world where dagrons are real, goddammit!
        </p>
      </div>
    )
  } else if (pathname.includes("about")) {
    return (
      <div className={styles.pageTitle}>
        <h1>Dancing with Dagrons</h1>
        <p>About our mythical journey to tame Dargon and create the ultimate Dagron AI.</p>
      </div>
    )
  } else if (pathname === "/ask") {
    return (
      <div className={styles.pageTitle}>
        <h1>Dargon the Dagron</h1>
        <p>
          Ever dreamt of conversing with dagrons? Dargon is here to make that dream a reality.
        </p>
      </div>
    )
  } else if (pathname === "/products") {
    return (
      <div className={styles.pageTitle}>
        <h1>Gimme Dagrons</h1>
        <p>
          Sometimes talking to a Dagron isn't enough. Check out our VR/AI dagron experiences to REALLY get your kicks.
        </p>
      </div>
    )
  }
}

export default PageTitle

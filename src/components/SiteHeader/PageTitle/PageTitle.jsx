import React from "react"
import styles from "./PageTitle.module.css"
import { useLocation } from "react-router"

function PageTitle() {
  const location = useLocation()
  const pathname = location.pathname

  if (pathname === "/") {
    return (
      <div className={styles.pageTitle}>
        <h1>Welcome to the Dargon</h1>
        <p>
          Welcome to ask the Dargon, where we answer your questions and sell you
          lot.
        </p>
      </div>
    )
  } else if (pathname.includes("about")) {
    return (
      <div className={styles.pageTitle}>
        <h1>About the Dargon</h1>
        <p>Who we are, what we do, why we are, where we do</p>
        Post an open-ended question here and see some suggestions from our
        speciality trained AI...
      </div>
    )
  } else if (pathname === "/question") {
    return (
      <div className={styles.pageTitle}>
        <h1>Ask the Dargon</h1>
        <p>
          Post an open-ended question here and see some suggestions from our
          speciality trained AI...
        </p>
      </div>
    )
  }
}

export default PageTitle

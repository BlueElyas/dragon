import React from "react"
import { Outlet } from "react-router"
import styles from "./MainContent.module.css"

function MainContent() {
  return (
    <div className={styles.mainContain}>
      <Outlet />
    </div>
  )
}

export default MainContent

import React from "react"
import styles from "./Logo.module.css"

function Logo() {
  return (
    <div className={styles.logo}>
      <img src="assets/dragon-logo.png" alt="cartoonish dragon logo" />
      <h3>Ask DargonAI </h3>
    </div>
  )
}

export default Logo

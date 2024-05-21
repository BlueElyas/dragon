import React from "react"
import SiteNav from "./SiteNav/SiteNav"
import PageTitle from "./PageTitle/PageTitle"
import Logo from "./Logo/Logo"
import styles from "./SiteHeader.module.css"

function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logoNav}>
        <Logo />
        <SiteNav />
      </div>
      <PageTitle />
    </header>
  )
}

export default SiteHeader

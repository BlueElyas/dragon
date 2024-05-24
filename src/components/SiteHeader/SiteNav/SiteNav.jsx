import React, { useState } from "react"
import styles from "./SiteNav.module.css"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

function SiteNav() {
  const [showNav, setShowNav] = useState(false)

  const handleMenuClick = () => {
    setShowNav(!showNav)
  }

  return (
    <div>
      <div id="menuTop" className={styles.menuTop} onClick={handleMenuClick}>
        <p>Menu</p>
        <div className={styles.menuIcon}>
          <FontAwesomeIcon icon={faBars} className="fa-2xl" />
        </div>
      </div>

      <nav className={`${styles.nav} ${showNav ? styles.show : ""}`}>
        <ul className={styles.ul}>
          <li>
            <NavLink
              to="/"
              className={styles.navLink}
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid #8900ff" : "",
                paddingBottom: isActive ? "2px" : "",
              })}
              onClick={() => setShowNav(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={styles.navLink}
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid #8900ff" : "",
                paddingBottom: isActive ? "2px" : "",
              })}
              onClick={() => setShowNav(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="ask"
              className={styles.navLink}
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid #8900ff" : "",
                paddingBottom: isActive ? "2px" : "",
              })}
              onClick={() => setShowNav(false)}
            >
              Ask
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              className={styles.navLink}
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid #8900ff" : "",
                paddingBottom: isActive ? "2px" : "",
              })}
              onClick={() => setShowNav(false)}
            >
              Shop
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default SiteNav

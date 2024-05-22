import React, { useState } from "react"
import styles from "./AboutPage.module.css"
import AboutTeam from "./AboutTeam/AboutTeam"
import AboutApp from "./AboutApp/AboutApp"

function AboutPage() {
  const [showTab, setShowTab] = useState("team")

  return (
    <div>
      <nav>
        <ul className={styles.container}>
          <li
            className={`${styles.aboutNav} ${
              showTab === "team" ? "" : styles.inactive
            }`}
            onClick={() => setShowTab("team")}
          >
            Team
          </li>
          <li
            className={`${styles.aboutNav} ${
              showTab === "app" ? "" : styles.inactive
            }`}
            onClick={() => setShowTab("app")}
          >
            App
          </li>
        </ul>
      </nav>
      <div className="">
        {showTab === "team" ? <AboutTeam /> : <AboutApp />}
      </div>
    </div>
  )
}

export default AboutPage

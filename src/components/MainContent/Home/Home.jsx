import React from "react"
import styles from "./Home.module.css"
import { NavLink } from "react-router-dom"

function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h3 className={styles.h3}>
            We do AI
            <span className={styles.span}>(via ChatGPT)</span>
          </h3>
          <p>
            Ask us a question, we'll secretly pass it on to ChatGPT and will
            return the result pretending that we generated it ourselves.
          </p>
        </div>
        <img src="assets/dargon2.png" className={styles.img} />
      </section>

      <hr className={styles.hr} />

      <section className={styles.cardSection}>
        <div className={styles.card}>
          <p>
            Post an open-ended question and see some suggestions from our
            speciality trained AI
          </p>
          <button className={`ButtonPurple ${styles.button}`}>
            <NavLink to="ask">Ask Dargon!</NavLink>
          </button>
        </div>
        <div className={styles.card}>
          <p>
            Post an open-ended question and see some suggestions from our
            speciality trained AI
          </p>
          <button className={`ButtonInverted ${styles.button}`}>
            <NavLink to="ask" style={{ color: "var(--purple)" }}>
              Ask Dargon!
            </NavLink>
          </button>
        </div>
      </section>
    </main>
  )
}

export default Home

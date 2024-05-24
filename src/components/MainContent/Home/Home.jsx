import React from "react"
import styles from "./Home.module.css"
import { NavLink } from "react-router-dom"

function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h2 className={styles.h2}>
            We do AI
            <span className={styles.span}>(via ChatGPT)</span>
          </h2>
          <p>
            Ask us a question, we'll secretly pass it on to ChatGPT and will
            return the result pretending that we generated it ourselves.
          </p>
        </div>
        <img src="/assets/dargon2.png" className={styles.img} />
      </section>

      <hr className={styles.hr} />

      <section className={styles.cardSection}>
        <div className={styles.card}>
          <p>
            Post an open-ended question and see some suggestions from our
            speciality trained AI
          </p>
          <br />
          <NavLink to="ask" className="ButtonPurple">
            Ask Dargon!
          </NavLink>
        </div>
        <div className={styles.card}>
          <p>
            Post an open-ended question and see some suggestions from our
            speciality trained AI
          </p>
          <br />
          <NavLink to="shop" className="ButtonInverted">
            Spend your Gold!
          </NavLink>
        </div>
      </section>
    </main>
  )
}

export default Home

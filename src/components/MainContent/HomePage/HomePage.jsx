import styles from "./HomePage.module.css"
import { NavLink } from "react-router-dom"

function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h2 className={styles.h2}>
            Bringing you closer to dagrons...
            <span className={styles.span}>(via Dargon/ChatGPT)</span>
          </h2>
          <p>
            We've distilled the essence of <strong>Dargon the Dagron</strong> into our stupendous AI. Never again does your life have to be without dagrons!
          </p>
        </div>
        <img src="\media\images\products\dragon\seb-bro-dagron.png" className={styles.img} alt="Japanese traditional style drawing of a dragon, eagle and snake battle royale" />
      </section>

      <hr className={styles.hr} />

      <section className={styles.cardSection}>
        <div className={styles.card}>
          <p>
            We know you have questions that only dagrons can answer...
          </p>
          <br />
          <NavLink to="ask" className="ButtonPurple">
            Ask Dargon!
          </NavLink>
        </div>
        <div className={styles.card}>
          <p>
            What's the point of a hoarde if you never do anything fun? 
          </p>
          <br />
          <NavLink to="products" className="ButtonInverted">
            Spend your Gold!
          </NavLink>
        </div>
      </section>
    </main>
  )
}

export default Home

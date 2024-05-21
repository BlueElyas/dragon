import React from "react"
import styles from "./ResultsCard.module.css"

function ResultsCard({ title, description }) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default ResultsCard

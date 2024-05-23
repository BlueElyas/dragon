import React from "react"
import styles from "./ResultsCard.module.css"

function ResultsCard({ title, description }) {
  return (
    <div className={styles.card}>
      <h4>{title}</h4>
      <p>
        <em>{description}</em>
      </p>
    </div>
  )
}

export default ResultsCard

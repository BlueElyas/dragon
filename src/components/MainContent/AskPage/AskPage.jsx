import React from "react"
import styles from "./AskPage.module.css"
import QuestionFeature from "./QuestionFeature/QuestionFeature"

function AskPage() {
  return (
    <>
      <div className={styles.askPageWrapper}>
        <h2 className={styles.askPageHeading}>Ask your question</h2>
        <QuestionFeature />
      </div>
    </>
  )
}

export default AskPage

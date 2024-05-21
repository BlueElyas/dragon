import React from "react"
import styles from "./AskPage.module.css"
import QuestionFeature from "./QuestionFeature/QuestionFeature"
import ResultsComponent from "./ResultsFeature/ResultsFeature"

function AskPage() {
  return (
    <>
      <div className={styles.askPageWrapper}>
        <h2 className={styles.askPageHeading}>Ask your question</h2>
        <QuestionFeature />
        <ResultsComponent />
      </div>
    </>
  )
}

export default AskPage

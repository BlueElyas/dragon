import React from "react"
import styles from "./AskPage.module.css"
import QuestionFeature from "./QuestionFeature/QuestionFeature"
import { useSelector } from "react-redux"
import ResultsComponent from "./ResultsFeature/ResultsFeature"

function AskPage() {
  const results = useSelector((state) => state.question.results)
  console.log(results.results)

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

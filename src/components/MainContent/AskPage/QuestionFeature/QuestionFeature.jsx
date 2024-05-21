import React, { useState } from "react"
import styles from "./QuestionFeature.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

function QuestionFeature() {
  const [inputQuestion, setInputQuestion] = useState("")
  const charRemaining = 160 - inputQuestion.length

  function handleChange(e) {
    setInputQuestion(e.target.value)
  }

  return (
    <div className={styles.questionFeatureWrapper}>
      <form>
        <input
          onChange={handleChange}
          value={inputQuestion}
          name="questionInput"
          type="text"
          placeholder="... Use an example"
        />

        <button type="submit" className="buttonPurple">
          Ask The Dragon
        </button>
        <button>Ask A New Question</button>
      </form>
      <p>
        <i>
          {charRemaining < 0 ? (
            <span className={styles.isRed}>{charRemaining} </span>
          ) : (
            <span>{charRemaining} </span>
          )}
          characters remaining
        </i>
      </p>
    </div>
  )
}

export default QuestionFeature

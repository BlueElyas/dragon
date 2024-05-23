import React, { useState } from "react"
import styles from "./QuestionFeature.module.css"
import { useSelector, useDispatch } from "react-redux"
import { fetchResults, resetState, setQuestion } from "./questionFeatureSlice"

function QuestionFeature() {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.question.question)

  // for controlled input component
  const [inputQuestion, setInputQuestion] = useState("")
  //   allows control of button class name state
  const [buttonClassName, setButtonClassName] = useState(styles.doNotShowButton)
  let resetButtonClasses = `ButtonInverted ${buttonClassName}`
  // number of character remaining in textbox
  const charRemaining = 160 - inputQuestion.length
  // Allows control of input component to pass to stoe
  function handleChange(e) {
    setInputQuestion(e.target.value)
    if (e.target.value !== "") {
      setButtonClassName(styles.showButton)
    }
  }
  //   resets the input box
  function handleReset() {
    setInputQuestion("")
    setButtonClassName(styles.doNotShowButton)
    dispatch(resetState())
  }
  function handleSubmit(e) {
    e.preventDefault()
    const queryParams = inputQuestion.split(" ").join("+")
    dispatch(setQuestion(queryParams))
    dispatch(fetchResults())
  }

  const sOrNoS = charRemaining === 1 ? "" : "s"

  const disableButton =
    charRemaining < 0 ? true : charRemaining === 160 ? true : false

  return (
    <div className={styles.questionFeatureWrapper}>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={handleChange}
          value={inputQuestion}
          name="questionInput"
          type="text"
          placeholder="Dare to ask..."
          required={true}
          rows={3}
          className={styles.questionBox}
        />

        <button
          type="submit"
          className={`ButtonPurple ${disableButton ? styles.greyedOut : ""}`}
          disabled={disableButton}
        >
          Ask The Dragon
        </button>
        <button
          type="reset"
          onClick={handleReset}
          className={resetButtonClasses}
        >
          Clear My Question
        </button>
      </form>
      <p className={styles.charRemainingContainer}>
        {charRemaining < 0 ? (
          <span className={styles.isRed}>{charRemaining} </span>
        ) : (
          <span>{charRemaining} </span>
        )}
        character{sOrNoS} remaining
      </p>
    </div>
  )
}

export default QuestionFeature

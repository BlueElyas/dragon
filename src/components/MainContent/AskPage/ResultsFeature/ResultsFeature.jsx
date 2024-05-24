import ResultsCard from "./ResultsCard"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDragon } from "@fortawesome/free-solid-svg-icons"
import styles from "./ResultsFeature.module.css"
import { resetState } from "../QuestionFeature/questionFeatureSlice"

function ResultsComponent() {
  const dispatch = useDispatch()
  const results = useSelector((state) => state.question.results)
  const isLoading = useSelector((state) => state.question.isLoading)
  const hasError = useSelector((state) => state.question.hasError)
  useEffect(() => {
    dispatch(resetState())
  }, [dispatch])
  if (isLoading) {
    return (
      <>
        <FontAwesomeIcon icon={faDragon} className="fa-2xl" />
        <p>Loading...</p>
      </>
    )
  }

  if (hasError) {
    return (
      <>
        <div>
          <h4>No Arkenstone for you.</h4>
          <p>Ask a new question, fool.</p>
          <img
            src="assets/dragon-napoleon-dynamite-instructor.png"
            alt=""
            style={{ width: "100px" }}
          />
        </div>
      </>
    )
  }

  if (results.results) {
    return (
      <div className={styles.replyContainer}>
        <h2 className={styles.replyTitle}>Replies</h2>
        {results.results.map((result) => (
          <ResultsCard
            title={result.title}
            description={result.description}
            key={result.title}
          />
        ))}
      </div>
    )
  }
}

export default ResultsComponent

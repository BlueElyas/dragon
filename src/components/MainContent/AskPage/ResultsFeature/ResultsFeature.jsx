import React from "react"
import ResultsCard from "./ResultsCard"
import { useSelector } from "react-redux"

function ResultsComponent() {
  const results = useSelector((state) => state.question.results)

  if (results.results) {
    return (
      <div>
        <h2>Results</h2>
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

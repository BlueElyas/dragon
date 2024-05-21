import React from "react"
import ResultsCard from "./ResultsCard"

function ResultsComponent({ results }) {
  return (
    <div>
      <h2>Results</h2>
      {results.map((result) => (
        <ResultsCard title={result.title} description={result.description} />
      ))}
    </div>
  )
}

export default ResultsComponent

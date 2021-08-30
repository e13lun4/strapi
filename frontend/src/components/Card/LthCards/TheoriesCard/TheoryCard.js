import React from 'react'
import ReactMarkdown from 'react-markdown'

const TheoryCard = ({ theory }) => {
  return (
    <div className="container pt-4">
      <div className="card">
        <div className="card-header">Теория: {theory.title}</div>
        <div className="card-body">
          <ReactMarkdown className="card-text">{theory.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default TheoryCard

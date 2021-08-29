import React from 'react'

const TheoryCard = ({ theory }) => {
  return (
    <div className="container pt-4">
      <div className="card">
        <div className="card-header">Теория: {theory.title}</div>
        <div className="card-body">
          <p className="card-text">{theory.content}</p>
        </div>
      </div>
    </div>
  )
}

export default TheoryCard

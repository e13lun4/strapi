import React from 'react'
import { Link } from 'react-router-dom'

const TheoriesCard = ({ theory, urlId, urlIdM }) => {
  return (
    <div className="container pt-4">
      <div className="card">
        <div className="card-header">Теория</div>
        <div className="card-body">
          <h5 className="card-title">{theory.title}</h5>
          <p className="card-text">{theory.description}</p>
          <Link
            to={`/course/${urlId}/module/${urlIdM}/lth/theory/${theory.id}`}
            className="btn btn-primary"
          >
            Перейти к теории
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TheoriesCard

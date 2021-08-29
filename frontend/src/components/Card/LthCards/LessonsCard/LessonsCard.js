import React from 'react'
import { Link } from 'react-router-dom'

const LessonsCard = ({ lesson, urlId, urlIdM }) => {
  return (
    <div className="container pt-4">
      <div className="card">
        <div className="card-header">Урок</div>
        <div className="card-body">
          <h5 className="card-title">{lesson.title}</h5>
          <p className="card-text">{lesson.description}</p>
          <Link
            to={`/course/${urlId}/module/${urlIdM}/lth/lesson/${lesson.id}`}
            className="btn btn-primary"
          >
            Перейти к уроку
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LessonsCard

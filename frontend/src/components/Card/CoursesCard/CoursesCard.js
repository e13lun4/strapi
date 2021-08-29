import React from 'react'
import { Link } from 'react-router-dom'

const CoursesCard = ({ course }) => {
  return (
    <div className="container pt-4">
      <div className="card">
        <div className="card-header">Курс</div>
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">{course.description}</p>
          <Link
            to={`/courses/${course.id}/modules`}
            className="btn btn-primary"
          >
            Перейти к модулям
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CoursesCard

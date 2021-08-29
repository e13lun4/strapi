import React from 'react'
import { Link } from 'react-router-dom'

const HomeworksCard = ({ homework, urlId, urlIdM }) => {
  return (
    <div className="container pt-4">
      <div className="card">
        <div className="card-header">Домашнее задание</div>
        <div className="card-body">
          <h5 className="card-title">{homework.title}</h5>
          <p className="card-text">{homework.description}</p>
          <Link
            to={`/course/${urlId}/module/${urlIdM}/lth/homework/${homework.id}`}
            className="btn btn-primary"
          >
            Перейти к домашнему заданию
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeworksCard

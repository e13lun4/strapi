import React from 'react'
import { Link } from 'react-router-dom'

const ModulesCard = ({ module, urlId }) => {
  return (
    <div className="container pt-4">
      <div className="card">
        <div className="card-header">Модуль</div>
        <div className="card-body">
          <h5 className="card-title">{module.title}</h5>
          <p className="card-text">{module.description}</p>
          <Link
            to={`/course/${urlId}/modules/${module.id}/lth`}
            className="btn btn-primary"
          >
            Перейти в модуль
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ModulesCard

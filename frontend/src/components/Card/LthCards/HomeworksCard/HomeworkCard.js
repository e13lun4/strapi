import React from 'react'

const HomeworkCard = ({ homework }) => {
  return (
    <div className="container pt-4">
      <div className="card">
        <div className="card-header">Домашнее задание: {homework.title}</div>
        <div className="card-body">
          <p className="card-text">{homework.content}</p>
        </div>
      </div>
    </div>
  )
}

export default HomeworkCard

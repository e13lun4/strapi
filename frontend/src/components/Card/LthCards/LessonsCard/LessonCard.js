import React from 'react'

const LessonCard = ({ lesson }) => {
  return (
    <div className="container pt-4">
      <div className="card">
        <div className="card-header">Урок: {lesson.title}</div>
        <div className="card-body">
          <p className="card-text">{lesson.content}</p>
        </div>
      </div>
    </div>
  )
}

export default LessonCard

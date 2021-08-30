import React from 'react'
import ReactMarkdown from 'react-markdown'

const LessonCard = ({ lesson }) => {
  return (
    <div className="container pt-4">
      <div className="card">
        <div className="card-header">Урок: {lesson.title}</div>
        <div className="card-body">
          <ReactMarkdown className="card-text">{lesson.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default LessonCard

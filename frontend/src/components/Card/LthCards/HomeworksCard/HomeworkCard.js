import React from 'react'
import ReactMarkdown from 'react-markdown'

const HomeworkCard = ({ homework }) => {
  return (
    <div className="container pt-4">
      <div className="card">
        <div className="card-header">Домашнее задание: {homework.title}</div>
        <div className="card-body">
          <ReactMarkdown className="card-text">
            {homework.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default HomeworkCard

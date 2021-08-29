import React, { useState, useEffect } from 'react'
import axios from 'axios'
import auth from '../../../utils/auth'
import Navbar from '../../../components/Navbar/Navbar'
import HomeworkCard from '../../../components/Card/LthCards/HomeworksCard/HomeworkCard'

const Homework = () => {
  const [homework, setHomework] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let urlElements = window.location.pathname.split('/')
    let urlElement = urlElements[7]
    const getJwt = auth.getToken()
    axios
      .get(`http://localhost:1337/homeworks/${urlElement}`, {
        headers: {
          Authorization: `Bearer ${getJwt}`,
        },
      })
      .then((res) => {
        console.log(res.data)
        setHomework(res.data)
        setIsLoading(false)
      })
      .catch((e) => {
        console.log('Error message:', e)
      })
  }, [])

  return (
    <React.Fragment>
      <Navbar />
      <div className="container pt-4">
        <div>
          {isLoading ? (
            <h2>Загрузка...</h2>
          ) : (
            <HomeworkCard homework={homework} />
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Homework

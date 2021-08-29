import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import auth from '../../utils/auth'
import LessonsCard from '../../components/Card/LthCards/LessonsCard/LessonsCard'
import TheoriesCard from '../../components/Card/LthCards/TheoriesCard/TheoriesCard'
import HomeworksCard from '../../components/Card/LthCards/HomeworksCard/HomeworksCard'

const Lth = () => {
  const [isLoadingLessons, setIsLoadingLessons] = useState(true)
  const [isLoadingTheories, setIsLoadingTheories] = useState(true)
  const [isLoadingHomeworks, setIsLoadingHomeworks] = useState(true)
  const [lessons, setLessons] = useState(null)
  const [theories, setTheories] = useState(null)
  const [homeworks, setHomeworks] = useState(null)

  let urlElements = window.location.pathname.split('/')
  let urlElement = urlElements[4]
  let urlId = urlElements[2]

  useEffect(() => {
    let urlElements = window.location.pathname.split('/')
    let urlElement = urlElements[4]
    const getJwt = auth.getToken()
    axios
      .get(`http://localhost:1337/lessons?_where[0][module.id]=${urlElement}`, {
        headers: {
          Authorization: `Bearer ${getJwt}`,
        },
      })
      .then((res) => {
        console.log(res.data)
        setLessons(res.data)
        setIsLoadingLessons(false)
      })
      .catch((e) => {
        console.log('Error message:', e)
      })
    axios
      .get(
        `http://localhost:1337/theories?_where[0][module.id]=${urlElement}`,
        {
          headers: {
            Authorization: `Bearer ${getJwt}`,
          },
        }
      )
      .then((res2) => {
        console.log(res2.data)
        setTheories(res2.data)
        setIsLoadingTheories(false)
      })
      .catch((e) => {
        console.log('Error message:', e)
      })
    axios
      .get(
        `http://localhost:1337/homeworks?_where[0][module.id]=${urlElement}`,
        {
          headers: {
            Authorization: `Bearer ${getJwt}`,
          },
        }
      )
      .then((res3) => {
        console.log(res3.data)
        setHomeworks(res3.data)
        setIsLoadingHomeworks(false)
      })
      .catch((e) => {
        console.log('Error message:', e)
      })
  }, [])

  return (
    <React.Fragment>
      <Navbar />
      <div>
        <div className="container pt-4">
          {isLoadingLessons ? (
            <h2>Загрузка...</h2>
          ) : (
            lessons.map((lesson) => (
              <LessonsCard
                urlId={urlId}
                urlIdM={urlElement}
                lesson={lesson}
                key={lesson.id}
              />
            ))
          )}
          <hr />
          {isLoadingTheories ? (
            <h2>...</h2>
          ) : (
            theories.map((theory) => (
              <TheoriesCard
                urlId={urlId}
                urlIdM={urlElement}
                theory={theory}
                key={theory.id}
              />
            ))
          )}
          <hr />
          {isLoadingHomeworks ? (
            <h2>...</h2>
          ) : (
            homeworks.map((homework) => (
              <HomeworksCard
                urlId={urlId}
                urlIdM={urlElement}
                homework={homework}
                key={homework.id}
              />
            ))
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Lth

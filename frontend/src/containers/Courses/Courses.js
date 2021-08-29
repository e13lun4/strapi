import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import auth from '../../utils/auth'
import CoursesCard from '../../components/Card/CoursesCard/CoursesCard'
var qs = require('qs')

const Courses = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [courses, setCourses] = useState(null)

  useEffect(() => {
    const getGroup = auth.getUserInfo()
    // console.log(getGroup)
    const group = getGroup.group.id
    const getJwt = auth.getToken()
    const query = qs.stringify({ _where: [{ group }] })
    axios
      .get(`http://localhost:1337/courses?${query}`, {
        headers: {
          Authorization: `Bearer ${getJwt}`,
        },
      })
      .then((res) => {
        setCourses(res.data)
        setIsLoading(false)
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
          {isLoading ? (
            <h2>Загрузка...</h2>
          ) : (
            courses.map((course) => (
              <CoursesCard course={course} key={course.id} />
            ))
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Courses

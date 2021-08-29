import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import auth from '../../utils/auth'
import ModulesCard from '../../components/Card/ModulesCard/ModulesCard'

const Modules = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [modules, setModules] = useState(null)

  let urlElements = window.location.pathname.split('/')
  let urlElement = urlElements[2]

  useEffect(() => {
    let urlElements = window.location.pathname.split('/')
    let urlElement = urlElements[2]
    const getJwt = auth.getToken()
    axios
      .get(
        `http://localhost:1337/modules?_where[0][courses.id]=${urlElement}`,
        {
          headers: {
            Authorization: `Bearer ${getJwt}`,
          },
        }
      )
      .then((res) => {
        // console.log(res.data)
        setModules(res.data)
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
            modules.map((module) => (
              <ModulesCard urlId={urlElement} module={module} key={module.id} />
            ))
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Modules

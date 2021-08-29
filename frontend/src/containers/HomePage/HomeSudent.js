import React from 'react'
import auth from '../../utils/auth'

const HomeStudent = () => {
  const userInfo = auth.getUserInfo()
  return (
    <div>
      <h1>Здравствуйте, вы вошли, как студент: {userInfo.username}</h1>
    </div>
  )
}

export default HomeStudent

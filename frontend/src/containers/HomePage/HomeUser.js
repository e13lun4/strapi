import React from 'react'
import auth from '../../utils/auth'

const HomeUser = () => {
  const userInfo = auth.getUserInfo()
  return (
    <div>
      <h1>Здравствуйте, вы вошли, как пользователь: {userInfo.username}</h1>
    </div>
  )
}

export default HomeUser

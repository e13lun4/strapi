import React from 'react'
import auth from '../../utils/auth'

const HomeParent = () => {
  const userInfo = auth.getUserInfo()
  return (
    <div>
      <h1>Здравствуйте, вы вошли, как родитель: {userInfo.username}</h1>
    </div>
  )
}

export default HomeParent

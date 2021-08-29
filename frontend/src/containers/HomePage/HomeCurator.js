import React from 'react'
import auth from '../../utils/auth'

const HomeCurator = () => {
  const userInfo = auth.getUserInfo()
  return (
    <div>
      <h1>Здравствуйте, вы вошли, как куратор: {userInfo.username}</h1>
    </div>
  )
}

export default HomeCurator

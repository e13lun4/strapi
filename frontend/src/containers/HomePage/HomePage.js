import React from 'react'
import PropTypes from 'prop-types'

import Navbar from '../../components/Navbar/Navbar'
import Button from '../../components/Button/Button'
import auth from '../../utils/auth'
// import Courses from '../Courses/Courses'
import HomeStudent from './HomeSudent'
import HomeParent from './HomeParent'
import HomeCurator from './HomeCurator'

class HomePage extends React.Component {
  render() {
    const getRole = auth.getUserInfo()
    // console.log(checkRole.role.type)
    if (getRole.role.type === 'student') {
      return (
        <React.Fragment>
          <Navbar />
          <div className="container pt-4">
            <HomeStudent />
            {/* <h1>Вы вошли, как студент</h1> */}
            <div style={{ marginTop: '50px' }}>
              <Button
                primary
                onClick={() => {
                  auth.clearAppStorage()
                  this.props.history.push('/auth/login')
                }}
              >
                Выйти
              </Button>
            </div>
          </div>
        </React.Fragment>
      )
    } else if (getRole.role.type === 'parent') {
      return (
        <div style={{ marginTop: '15%' }}>
          <HomeParent />
          {/* <h1>Вы вошли, как родитель</h1> */}
          <div style={{ marginTop: '50px' }}>
            <Button
              primary
              onClick={() => {
                auth.clearAppStorage()
                this.props.history.push('/auth/login')
              }}
            >
              Выйти
            </Button>
          </div>
        </div>
      )
    } else {
      return (
        <div style={{ marginTop: '15%' }}>
          <HomeCurator />
          {/* <h1>Вы вошли, как куратор</h1> */}
          <div style={{ marginTop: '50px' }}>
            <Button
              primary
              onClick={() => {
                auth.clearAppStorage()
                this.props.history.push('/auth/login')
              }}
            >
              Выйти
            </Button>
          </div>
        </div>
      )
    }
  }
}

HomePage.propTypes = {
  history: PropTypes.object.isRequired,
}

export default HomePage

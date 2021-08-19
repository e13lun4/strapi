import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../components/Button/Button'
import auth from '../../utils/auth'

class HomePage extends React.Component {
  render() {
    return (
      <div style={{ marginTop: '15%' }}>
        <h1>Вы вошли</h1>
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

HomePage.propTypes = {
  history: PropTypes.object.isRequired,
}

export default HomePage

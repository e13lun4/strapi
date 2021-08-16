import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import AuthPage from '../src/containers/AuthPage/AuthPage'
import HomePage from '../src/containers/HomePage/HomePage'
import NotFoundPage from '../src/containers/NotFoundPage/NotFoundPage'

// This component ios HoC that prevents the user from accessing a route if he's not logged in
import PrivateRoute from '../src/containers/PrivateRoute/PrivateRoute'

// Design
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* A user can't go to the HomePage if is not authenticated */}
          <PrivateRoute path="/" component={HomePage} exact />
          <Route path="/auth/:authType/:id?" component={AuthPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App

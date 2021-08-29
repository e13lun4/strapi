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
import Courses from './containers/Courses/Courses'
import Modules from './containers/Modules/Modules'
import Lth from './containers/Lth/Lth'
import Lesson from './containers/Lth/Lesson/Lesson'
import Theory from './containers/Lth/Theory/Theory'
import Homework from './containers/Lth/Homework/Homework'

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          {/* A user can't go to the HomePage if is not authenticated */}
          <PrivateRoute path="/" component={HomePage} exact />
          <PrivateRoute path="/course/:id/modules" component={Modules} />
          <PrivateRoute
            path="/course/:id/module/:id/lth/lesson/:id"
            component={Lesson}
          />
          <PrivateRoute
            path="/course/:id/module/:id/lth/theory/:id"
            component={Theory}
          />
          <PrivateRoute
            path="/course/:id/module/:id/lth/homework/:id"
            component={Homework}
          />
          <PrivateRoute path="/course/:id/module/:id/lth" component={Lth} />
          <PrivateRoute path="/courses" component={Courses} />
          <Route path="/auth/:authType/:id?" component={AuthPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App

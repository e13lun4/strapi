import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1">Symmetry</span>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">
              Главная
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/courses">
              Курсы
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar

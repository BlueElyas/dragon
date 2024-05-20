import React from "react"
import { Outlet } from "react-router"
import { NavLink } from "react-router-dom"

function AboutPage() {
  return (
    <div>
      AboutPage
      <ul>
        <li>
          <NavLink to="team">Team</NavLink>
        </li>
        <li>
          <NavLink to="app">App</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default AboutPage

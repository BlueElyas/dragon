import React from "react"
import { Outlet } from "react-router"
import { NavLink } from "react-router-dom"

function AboutPage() {
  return (
    <div>
      <div>
        <NavLink style={{ color: "black" }} to="team">
          Team
        </NavLink>
        <NavLink style={{ color: "black" }} to="app">
          App
        </NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default AboutPage

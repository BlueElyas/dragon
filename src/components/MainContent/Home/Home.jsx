import React from "react"
import { NavLink } from "react-router-dom"

function Home() {
  return (
    <div>
      This is a homepage
      <NavLink to="about">about</NavLink>
      <NavLink to="ask">Ask The Dragon</NavLink>
      <img
        style={{ width: "100px", display: "block" }}
        src="assets/dragon-napoleon-dynamite-instructor.png"
      />
    </div>
  )
}

export default Home

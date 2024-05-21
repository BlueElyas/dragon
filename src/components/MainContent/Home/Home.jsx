import React from "react"
import { NavLink } from "react-router-dom"

function Home() {
  return (
    <div>
      <p>This is a homepage</p>
      <NavLink to="about">about</NavLink>
      <button className="ButtonPurple">For styling</button>
      <img
        style={{ width: "100px", display: "block" }}
        src="assets/dragon-napoleon-dynamite-instructor.png"
      />
    </div>
  )
}

export default Home

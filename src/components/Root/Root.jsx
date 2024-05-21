import React from "react"
import { Outlet } from "react-router"
import SiteHeader from "../SiteHeader/SiteHeader"

function Root() {
  return (
    <div>
      <SiteHeader />
      <Outlet />
    </div>
  )
}

export default Root

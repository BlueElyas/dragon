import React from "react"
import { Outlet } from "react-router-dom"

import MainContent from "../MainContent/MainContent"
import SiteHeader from "../SiteHeader/SiteHeader"

function Root() {
  return (
    <div>
      <SiteHeader />
      <MainContent />
    </div>
  )
}

export default Root

import * as React from "react"
import Navbar from "./Navbar"
import Banner from "./Banner"

const Header = () => {
  return (
    <div className="header">
      <Banner />
      <Navbar />
    </div>
  )
}

export default Header

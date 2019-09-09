import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import "./layout.css"
import Logo from "./logo"

export default ({children}) => {
return (
    <div>
        <div className="navbarContainer">
          <Navbar />
          <Logo />
        </div>
        <div className="blogContainer">
          {children}
        </div>
        <Footer />
    </div>
)
} 
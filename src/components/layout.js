import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import "./layout.css"
import Logo from "./logo"

export default ({children}) => {
return (
    <div className="stickyFooterContainer">
      <div className="stickyFooterContent">
        <div className="navbarContainer">
          <Navbar />
          <Logo />
        </div>
        <div className="blogContainer">
          {children}
        </div>
      </div>
        <Footer />
    </div>
)
} 
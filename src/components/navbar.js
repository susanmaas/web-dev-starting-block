import React from "react"
import { Link } from "gatsby"

export default () => (
    <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
    </div>
)

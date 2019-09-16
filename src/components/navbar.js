import React from "react"
import { Link } from "gatsby"
import navbarStyles from "./navbar.module.css"

const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default () => (
    <nav>
        <ul className={navbarStyles.navbar}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="about">About</ListLink>
            <ListLink to="contact">Contact</ListLink>
        </ul>
    </nav>
)

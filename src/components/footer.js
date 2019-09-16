import React from "react"
import footerStyles from "./footer.module.css"
import { Link } from "gatsby"

export default () => (
    <footer className={footerStyles.footer}>
        <small>Copyright 2019, Susan Maas</small>
        <small><Link to="legal">Legal</Link></small>
    </footer>
)

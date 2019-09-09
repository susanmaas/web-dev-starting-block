import React from "react"
import logoStyles from "./logo.module.css"
import { Link } from "gatsby"

export default () => (
    <Link to="/">
        <h1 class={logoStyles.siteTitle}>
        <span className={logoStyles.spanSiteTitle1}>Web</span><span className={logoStyles.spanSiteTitle2}>Dev</span> <span className={logoStyles.spanSiteTitle3}>Starting Block</span></h1>
    </Link>
)
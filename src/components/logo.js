import React from "react"
import logoStyles from "./logo.module.css"
import { Link } from "gatsby"

export default () => (
    <Link to="/">
        <h1 className={logoStyles.siteTitle}>
        {/* Div only for styling purposes for logo when browser window under 545px wide */}
        <div>
            <span className={logoStyles.spanSiteTitle1}>Web</span><span className={logoStyles.spanSiteTitle2}>Dev</span>
        </div>
        <span className={logoStyles.spanSiteTitle3}>Starting Block</span></h1>
    </Link>
)
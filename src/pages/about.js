import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => (
    <Layout>
        <h1>About this Blog</h1>
        <p>Hi, I'm Susan! I'm teaching myself web development. This blog is part of that process. I hope it helps you out, too.</p>
        <p>If you'd like to reach me, you can use my <Link to="/contact/">contact page</Link>.</p>
        <p>Happy reading!</p>
        <p>Susan</p>
    </Layout>
)

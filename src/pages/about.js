import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => (
    <Layout>
        <h1>About this Blog</h1>
        <p>Hi, I'm Susan! I'm teaching myself web development.</p>
        <p>My goal is to provide you with informative, useful posts to help you get started with your learning.</p>
        <p>So jump in, and let's do this together!</p>
        <p>If you'd like to reach me, you can use my <Link className="blueLinks" to="/contact/">contact page</Link>.</p>
        <p>Happy reading!</p>
        <p>Susan</p>
    </Layout>
)

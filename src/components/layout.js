import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import Footer from "./footer"

export default ({children}) => {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
      )
return (
    <div>
        <Navbar />
        <h1>{data.site.siteMetadata.title}</h1>
        {children}
        <Footer />
    </div>
)
} 
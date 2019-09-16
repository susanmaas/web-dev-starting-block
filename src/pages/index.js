import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    return (
        <Layout>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <Link to={node.fields.slug}>
                        <div className="postContainer">
                        <h3 className="postTitle">{node.frontmatter.title}{" "}</h3>
                        <h4 className="postDate">{node.frontmatter.date}</h4>
                        <p>{node.excerpt}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </Layout>
    )
}
export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`
import React from "react"
import { graphql } from "gatsby"
import Header from "./components/header"
import Layout from "./components/layout"

export default ({ data }) => (
  <Layout>
    <div style={{ color: `teal` }}>
      <h1>About {data.site.siteMetadata.title}</h1>
      <Header headerText="It's pretty cool" />
      <p>Such wow. Very React.</p>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

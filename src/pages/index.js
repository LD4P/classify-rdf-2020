import React from "react"
import { Link } from "gatsby"

import PageTitle from "../components/page-title"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageTitle title="A Machine Learning Approach for Classifying Sinopia's RDF" />
    <p>Jeremy Nelson<br/>Stanford University Libraries</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/background/">Background</Link>
  </Layout>
)

export default IndexPage

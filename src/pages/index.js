import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import PageTitle from "../components/page-title"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageTitle title="A Machine Learning Approach for Classifying Sinopia's RDF" />
    <div className="wrapper">
      <div className="content">
        <p>Jeremy Nelson<br/>
        <Link to="https://library.stanford.edu/">Stanford University Libraries</Link>
        </p>
      </div>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link className="button ld4_lime_bk" to="/background/">Background  &raquo;</Link>
  </Layout>
)

export default IndexPage

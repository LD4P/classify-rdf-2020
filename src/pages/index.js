import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import PageTitle from "../components/page-title"
import SEO from "../components/seo"

const SummaryArticle = () => (
  <article>
    <h3>About</h3>
    <p>
      Online Presentation for LDP 2020 conference on machine learning classification
      of external RDF into Sinopia's Resource Templates.
    </p>
  </article>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageTitle title="A Machine Learning Approach for Classifying Sinopia's RDF" />
    <div className="wrapper">
      <div className="content">
        <p>Jeremy Nelson<br/> <a href="mailto:jpnelson@stanford.edu">jpnelson@stanford.edu</a><br/>
        <Link to="https://library.stanford.edu/">Stanford University Libraries</Link>
        </p>
      </div>
    </div>
    <div style={{ maxWidth: `450px`, marginBottom: `1.45rem` }}>
      <SummaryArticle />
    </div>
    <Link className="button ld4_lime_bk" to="/background/">Background  &raquo;</Link>
  </Layout>
)

export default IndexPage

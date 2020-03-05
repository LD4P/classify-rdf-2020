import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NextStepsPage = () => (
  <Layout>
    <SEO title="Next Steps" />
    <h3>A Machine Learning Approach for Classifying Sinopia's RDF</h3>
    <h1>Next Steps</h1>


    Back to <Link to="/initial-results/">Initial Results</Link>,
    next <Link to="/">Home</Link>
  </Layout>
)

export default NextStepsPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const InitialResultsPage = () => (
  <Layout>
    <SEO title="Initial Results" />
    <h3>A Machine Learning Approach for Classifying Sinopia's RDF</h3>
    <h1>Initial Results</h1>

    Back to <Link to="/model-training/">Training Data Models</Link>,
     <Link to="/next-steps/">Next Steps</Link>
  </Layout>
)

export default InitialResultsPage

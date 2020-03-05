import React from "react"
import { Link } from "gatsby"

import FooterNavigation from "../components/footer-nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

const InitialResultsPage = () => (
  <Layout>
    <SEO title="Initial Results" />
    <h3>A Machine Learning Approach for Classifying Sinopia's RDF</h3>
    <h1>Initial Results</h1>

    <FooterNavigation backTo='model-training'
                      backLabel='Training Data Models'
                      nextTo='next-steps'
                      nextLabel= 'Next Steps' />
  </Layout>
)

export default InitialResultsPage

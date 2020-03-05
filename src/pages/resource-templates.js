import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ResourceTemplatesPage = () => (
  <Layout>
    <SEO title="Resource Templates" />
    <h3>A Machine Learning Approach for Classifying Sinopia's RDF</h3>
    <h1>Resource Templates</h1>


    Back to <Link to="/sinopia-challenge/">Sinopia's UI Challenge</Link>,
    next <Link to="/external-rdf/">External RDF</Link>
  </Layout>
)

export default ResourceTemplatesPage

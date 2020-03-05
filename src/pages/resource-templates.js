import React from "react"
import { Link } from "gatsby"

import FooterNavigation from "../components/footer-nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ResourceTemplatesPage = () => (
  <Layout>
    <SEO title="Resource Templates" />
    <h3>A Machine Learning Approach for Classifying Sinopia's RDF</h3>
    <h1>Resource Templates</h1>

    <FooterNavigation backTo='sinopia-challenge'
                      backLabel="Sinopia's UI Challenge"
                      nextTo='external-rdf'
                      nextLabel= 'External RDF' />
  </Layout>
)

export default ResourceTemplatesPage

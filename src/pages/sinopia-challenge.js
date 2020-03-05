import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const SinopiaChallengePage = () => (
  <Layout>
    <SEO title="Sinopia's UI Challenge" />
    <h3>A Machine Learning Approach for Classifying Sinopia's RDF</h3>
    <h1>Sinopia's UI Challenge -- Classifying RDF</h1>

    <FooterNavigation backTo='background'
                      backLabel="Background"
                      nextTo='resource-templates'
                      nextLabel= 'resource-templates' />
  </Layout>
)

export default SinopiaChallengePage

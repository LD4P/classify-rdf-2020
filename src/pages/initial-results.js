import React from "react"
import { Link } from "gatsby"

import FooterNavigation from "../components/footer-nav"
import Layout from "../components/layout"
import PageTitle from "../components/page-title"
import PresentationTitle from "../components/presentation-title"
import SEO from "../components/seo"

const title = "Initial Results"

const InitialResultsPage = () => (
  <Layout>
    <SEO title={title} />
    <PresentationTitle />
    <PageTitle title={title} />
    <FooterNavigation backTo='model-training'
                      backLabel='Training Data Models'
                      nextTo='next-steps'
                      nextLabel= 'Next Steps' />
  </Layout>
)

export default InitialResultsPage

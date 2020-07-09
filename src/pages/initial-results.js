import React from "react"
import { Link } from "gatsby"

import FooterNavigation from "../components/footer-nav"
import Layout from "../components/layout"
import PageTitle from "../components/page-title"
import SEO from "../components/seo"

const title = "Initial Results"

const InitialResultsPage = () => (
  <Layout>
    <SEO title={title} />
    <PageTitle title={title} />
    <FooterNavigation backTo='tabular-learner'
                      backLabel='Tabular Learner'
                      nextTo='next-steps'
                      nextLabel= 'Next Steps' />
  </Layout>
)

export default InitialResultsPage

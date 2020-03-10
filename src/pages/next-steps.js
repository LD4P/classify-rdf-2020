import React from "react"
import { Link } from "gatsby"

import FooterNavigation from "../components/footer-nav"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"
import SEO from "../components/seo"

const title = "Next Steps"

const NextStepsPage = () => (
  <Layout>
    <SEO title={title} />
    <PageTitle title={title} />
    <FooterNavigation backTo='initial-results'
                      backLabel="Background"
                      nextTo='/'
                      nextLabel='Home'/>
  </Layout>
)

export default NextStepsPage

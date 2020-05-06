import React from "react"
import { Link } from "gatsby"

import FooterNavigation from "../components/footer-nav"
import Layout from "../components/layout"
import PageTitle from "../components/page-title"
import SEO from "../components/seo"

const title = "FastAI's Tabular Learner"

const FastAITabularLearnerPage = () => (
  <Layout>
    <SEO title={title} />
    <PageTitle title={title} />

    <FooterNavigation backTo='tabular-list'
                      backLabel="FastAI's TabularList"
                      nextTo='initial-results'
                      nextLabel= 'Initial Results' />
  </Layout>
)

export default FastAITabularLearnerPage

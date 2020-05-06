import React from "react"

import PageTitle from "../components/page-title"
import FooterNavigation from "../components/footer-nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

const title = "FastAI's TabularList"

const ExtractingTrainingValidationDataArticle = () => (
  <article>
    <h2>Extracting Training and Validation Data</h2>
  </article>
)

const FastAITabularListPage = () => (
  <Layout>
    <SEO title={title} />
    <PageTitle title={title} />
    <ExtractingTrainingValidationDataArticle />
    <FooterNavigation backTo='data-frames'
                      backLabel="Panda's DataFrame"
                      nextTo='tabular-learner'
                      nextLabel="Fast AI's Tabular Learner" />
  </Layout>
)

export default FastAITabularListPage

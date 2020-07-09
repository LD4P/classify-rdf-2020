import React from "react"

import PageTitle from "../components/page-title"
import FooterNavigation from "../components/footer-nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

const title = "FastAI's TabularList"

const DataPrepArticle = () => (
  <article>
    <h2>Data Preparation</h2>
  </article>
)

const FastAITabularListPage = () => (
  <Layout>
    <SEO title={title} />
    <PageTitle title={title} />
    <p>
      With <a href="https://www.fast.ai">FastAI</a> focus on making machine
      learning easier to use, we can now take the Panda's DataFrame created in
      the previous step to create a
      <a href="https://docs.fast.ai/tabular.data.html#TabularList">TabularList</a>
      as the data input into the data Learner. The TabularList provides a number
      of options for preparing the data.
    </p>
    <DataPrepArticle />
    <FooterNavigation backTo='data-frames'
                      backLabel="Panda's DataFrame"
                      nextTo='tabular-learner'
                      nextLabel="Fast AI's Tabular Learner" />
  </Layout>
)

export default FastAITabularListPage

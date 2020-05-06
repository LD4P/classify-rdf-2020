import React from "react"

import PageTitle from "../components/page-title"
import FooterNavigation from "../components/footer-nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

const title = "Pandas DataFrame"

const PandasDataFramePage = () => (
  <Layout>
    <SEO title={title} />
    <PageTitle title={title} />

    <FooterNavigation backTo='resource-templates'
                      backLabel="Resource Templates"
                      nextTo='tabular-list'
                      nextLabel="Fast AI's TabularList" />
  </Layout>
)

export default PandasDataFramePage

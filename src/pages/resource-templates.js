import React from "react"
import { Link } from "gatsby"

import PageTitle from "../components/page-title"
import FooterNavigation from "../components/footer-nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

const title = "Resource Templates"

const ResourceTemplatesPage = () => (
  <Layout>
    <PageTitle title={title} />

    <FooterNavigation backTo='sinopia-challenge'
                      backLabel="Sinopia Classifying RDF"
                      nextTo='tf-data-models'
                      nextLabel='TensorFlow Data Models' />
  </Layout>
)

export default ResourceTemplatesPage

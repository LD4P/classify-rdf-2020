import React from "react"
import { Link } from "gatsby"

import PageTitle from "../components/page-title"
import PresentationTitle from "../components/presentation-title"
import FooterNavigation from "../components/footer-nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

const title = "Resource Templates"

const ResourceTemplatesPage = () => (
  <Layout>
    <SEO title={title} />
    <PresentationTitle />
    <PageTitle title={title} />

    <FooterNavigation backTo='sinopia-challenge'
                      backLabel="Sinopia's UI Challenge"
                      nextTo='external-rdf'
                      nextLabel= 'External RDF' />
  </Layout>
)

export default ResourceTemplatesPage

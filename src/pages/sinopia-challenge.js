import React from "react"
import { Link } from "gatsby"

import PageTitle from "../components/page-title"
import PresentationTitle from "../components/presentation-title"
import FooterNavigation from "../components/footer-nav"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const title = "Sinopia's UI Challenge -- Classifying RDF"

const SinopiaChallengePage = () => (
  <Layout>
    <SEO title={title} />
    <PresentationTitle />
    <PageTitle title={title} />

    <FooterNavigation backTo='background'
                      backLabel="Background"
                      nextTo='resource-templates'
                      nextLabel= 'resource-templates' />
  </Layout>
)

export default SinopiaChallengePage

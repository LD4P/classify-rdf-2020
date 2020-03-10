import React from "react"
import { Link } from "gatsby"

import PageTitle from "../components/page-title"
import FooterNavigation from "../components/footer-nav"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const title = "Sinopia's UI Challenge -- Classifying RDF"

const SinopiaChallengePage = () => (
  <Layout>
    <SEO title={title} />
    <PageTitle title={title} />
    <div className="row">
      <div className="col">
        <h3>Search &amp; Cloning</h3>
      </div>
      <div className="col">
        <h3>Importing</h3>

      </div>
    </div>
    <FooterNavigation backTo='background'
                      backLabel="Background"
                      nextTo='resource-templates'
                      nextLabel= 'resource-templates' />
  </Layout>
)

export default SinopiaChallengePage

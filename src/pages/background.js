import React from "react"
import { Link } from "gatsby"

import PageTitle from "../components/page-title"
import Layout from "../components/layout"
import Image from "../components/image"
import FooterNavigation from "../components/footer-nav"
import SEO from "../components/seo"

const title = "Background"

const BackgroundPage = () => (
  <Layout>
    <SEO title={title} />
    <PageTitle title={title} />
    <LDPArticle />
    <TensorFlowArticle />
    <FooterNavigation backTo=''
                      backLabel='Start'
                      nextTo='sinopia-challenge'
                      nextLabel= 'Sinopia UI Challenge' />
  </Layout>
)

const LDPArticle = () => (
  <article>
    <h2>Linked Data for Production (LD4P)</h2>
    <p>
      Original funded by the Mellon Foundation, the Linked Data for Production is currently
      on it's third grant round for funding the implmentation of linked data systems
      for libraries, museums, and other cultural heritage organizations.
    </p>
  </article>
)

const TensorFlowArticle = () => (
  <article>
    <h2>TensorFlow</h2>
  </article>
)

export default BackgroundPage

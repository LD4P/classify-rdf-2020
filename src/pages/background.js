import React from "react"
import { Link } from "gatsby"

import PageTitle from "../components/page-title"
import PresentationTitle from "../components/presentation-title"
import Layout from "../components/layout"
import Image from "../components/image"
import FooterNavigation from "../components/footer-nav"
import SEO from "../components/seo"

const title = "Background"

const BackgroundPage = () => (
  <Layout>
    <SEO title={title} />
    <PresentationTitle />
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
  </article>
)

const TensorFlowArticle = () => (
  <article>
    <h2>TensorFlow</h2>
  </article>
)

export default BackgroundPage

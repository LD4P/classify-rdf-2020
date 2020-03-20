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
    <p>
     <a href="https://sinopia.io">Sinopia</a>, a cloud-based linked-data editor,
     was the primary product of the second LD4P grant cycle that started in 2018
     and ended in 2020. The third LD4P grant, that runs from 2020-2022 focuses
     on user-interface improvements in Sinopia as well as new backend processes for
     integrating Sinopia with third-parties like OCLC and ShareVDE.
    </p>
  </article>
)

const TensorFlowArticle = () => (
  <article>
    <h2>TensorFlow</h2>
    <p>
      <a href="https://www.tensorflow.org/">TensorFlow</a>, an open source machine
      learning framework originally developed by Google, allows for easy creation
      of predicative models with large training and validation data sets. 
    </p>
  </article>
)

export default BackgroundPage

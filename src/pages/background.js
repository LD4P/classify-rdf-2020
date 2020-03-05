import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const BackgroundPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>A Machine Learning Approach for Classifying Sinopia's RDF</h3>
    <h1>Background</h1>
    <LDPArticle />
    <TensorFlowArticle />
    Next <Link to="/sinopia-challenge/">Sinopia UI Challenge</Link>
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

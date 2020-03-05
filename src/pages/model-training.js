import React from "react"
import { Link } from "gatsby"

import FooterNavigation from "../components/footer-nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ExtractingTrainingValidationDataArticle = () => (
  <article>
    <h2>Extracting Training and Validation Data</h2>
  </article>
)

const ModelTrainingPage = () => (
  <Layout>
    <SEO title="Model Training" />
    <h3>A Machine Learning Approach for Classifying Sinopia's RDF</h3>
    <h1>Training Data Models</h1>
    <ExtractingTrainingValidationDataArticle />
    <FooterNavigation backTo='tf-data-models'
                      backLabel='TensorFlow Data Models'
                      nextTo='initial-results'
                      nextLabel= 'Initial Results' />
  </Layout>
)

export default ModelTrainingPage

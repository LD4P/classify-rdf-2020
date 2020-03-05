import React from "react"
import { Link } from "gatsby"

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
    Back to <Link to="/tf-data-models/">TensorFlow Data Models</Link>,
    next <Link to="/initial-results/">Initial Results</Link>
  </Layout>
)

export default ModelTrainingPage

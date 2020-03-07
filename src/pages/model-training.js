import React from "react"
import { Link } from "gatsby"

import FooterNavigation from "../components/footer-nav"
import Layout from "../components/layout"
import PageTitle from "../components/page-title"
import PresentationTitle from "../components/presentation-title"
import SEO from "../components/seo"

const title = "Training Data Models"

const ExtractingTrainingValidationDataArticle = () => (
  <article>
    <h2>Extracting Training and Validation Data</h2>
  </article>
)

const ModelTrainingPage = () => (
  <Layout>
    <SEO title={title} />
    <PresentationTitle />
    <PageTitle title={title} />
    <ExtractingTrainingValidationDataArticle />
    <FooterNavigation backTo='tf-data-models'
                      backLabel='TensorFlow Data Models'
                      nextTo='initial-results'
                      nextLabel= 'Initial Results' />
  </Layout>
)

export default ModelTrainingPage

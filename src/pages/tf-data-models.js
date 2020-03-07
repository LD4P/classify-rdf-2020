import React from "react"

import PageTitle from "../components/page-title"
import PresentationTitle from "../components/presentation-title"
import FooterNavigation from "../components/footer-nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

const title = "TensorFlow Data Models"

const ResourceTemplateLabelsArticle = () => (
  <article>
    <h2>Resource Templates as Labels (Classes)</h2>
  </article>
)

const RDFNumpyMatixArticle = () => (
  <article>
    <h2>RDF Subjects-Predicates as a Matrix</h2>
  </article>
)

const RDFUriHashArticle = () => (
  <article>
    <h2>RDF Subjects-Predicats as a Hash Matrix</h2>
  </article>
)

const TensorFlowPage = () => (
  <Layout>
    <SEO title="TensorFlow Data Models" />
    <PresentationTitle />
    <PageTitle title={title} />
    <ResourceTemplateLabelsArticle />
    <RDFNumpyMatixArticle />
    <RDFUriHashArticle />
    <FooterNavigation backTo='external-rdf'
                      backLabel='External RDF'
                      nextTo='model-training'
                      nextLabel= 'Training RDF Classification models' />
  </Layout>
)

export default TensorFlowPage

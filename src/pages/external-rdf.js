import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ExternalRDFPage = () => (
  <Layout>
    <SEO title="External RDF" />
    <h3>A Machine Learning Approach for Classifying Sinopia's RDF</h3>
    <h1>External RDF</h1>
    <ShareVDEArticle />
    <SinopiaLoadRDFArticle />
    Back to <Link to="/resource-templates/">Resource Templates</Link>,
    next <Link to="/tf-data-models/">TensorFlow Data Models</Link>
  </Layout>
)

const SinopiaLoadRDFArticle = () => (
  <article>
    <h2>Loading RDF into Sinopia</h2>

  </article>
)

const ShareVDEArticle = () => (
  <article>
    <h2>ShareVDE Hubs, Works, and Instances</h2>
    <blockquote className="rounded border bg-light">
      <Link to="https://www.share-vde.org/">ShareVDE</Link> is a commerical
      service of Casalini that provides Linked Data lookups for a subset of
      Sinopia's cohort members.
    </blockquote>
  </article>
)

export default ExternalRDFPage

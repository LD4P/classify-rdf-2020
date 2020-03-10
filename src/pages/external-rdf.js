import React from "react"
import { Link } from "gatsby"

import PageTitle from "../components/page-title"
import FooterNavigation from "../components/footer-nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

const title = "External RDF"

const ExternalRDFPage = () => (
  <Layout>
    <SEO title={title} />
    <PageTitle title={title} />
    <ShareVDEArticle />
    <SinopiaLoadRDFArticle />
    <FooterNavigation backTo='resource-templates'
                      backLabel='Resource Templates'
                      nextTo='tf-data-models'
                      nextLabel= 'TensorFlow Data Models' />
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

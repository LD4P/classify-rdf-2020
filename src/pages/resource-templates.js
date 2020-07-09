import React from "react"

import PageTitle from "../components/page-title"
import FooterNavigation from "../components/footer-nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

import ResourceTemplateExample from "../images/abbreviated-title-resource-template.png"
import SinopiaAbbreviatedTitle from "../images/sinopia-abbreviated-title.png"

const title = "Resource Templates"

const BackgroundArticle = () => (
  <article>
    <h2>Background</h2>
    <p>
      In an effort to maintain interoperability with the Library of
      Congress <a href="http://bibframe.org/bfe/index.html">BIBFRAME Editor</a>
      and <a href="http://bibframe.org/profile-edit/#/profile/list">Profile Editor</a>,
      Sinopia uses a JSON Domain Specific Language (DSL) for defining how to
      edit and generate RDF.
    </p>
    <p>
      Sinopia's <a href="https://profile-editor.sinopia.io/#/profile/sinopia">Profile Editor</a> creates
      creates, edits, and exports JSON <code>Profiles</code> that contain
      <code>Resource Templates</code>. Each resource template defines one or more
      <code>propertyTemplates</code>.
    </p>
    <p>
      Resource Templates
    </p>
  </article>
)

const ExampleResourceTemplateArticle = () => (
  <article>
    <p>
      An example Resource Template for an <em>Abbreviated Title</em> in
      Sinopia.
    </p>
    <img src={ResourceTemplateExample} />
    <p>
      This <em>Abbreviated Title</em> title produces the following user interface
      in the Sinopia Editor:
    </p>
    <img src={SinopiaAbbreviatedTitle} />
  </article>
)



const ResourceTemplatesPage = () => (
  <Layout>
    <PageTitle title={title} />
    <SEO title={title} />
    <BackgroundArticle />
    <ExampleResourceTemplateArticle />
    <FooterNavigation backTo='sinopia-challenge'
                      backLabel="Sinopia Classifying RDF"
                      nextTo='data-frames'
                      nextLabel='RDF Data Frames' />
  </Layout>
)

export default ResourceTemplatesPage

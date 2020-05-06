import React from "react"
import { Link } from "gatsby"

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
      Congress <a href="">BIBFRAME Editor</a> and <a href="">Profile Editor</a>,
      Sinopia uses a JSON Domain Specific Language (DSL) for defining how to
      edit and generate RDF.
    </p>
    <p>
      Sinopia
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
    <BackgroundArticle />
    <ExampleResourceTemplateArticle />
    <FooterNavigation backTo='sinopia-challenge'
                      backLabel="Sinopia Classifying RDF"
                      nextTo='data-frames'
                      nextLabel='RDF Data Frames' />
  </Layout>
)

export default ResourceTemplatesPage

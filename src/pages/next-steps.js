import React from "react"

import FooterNavigation from "../components/footer-nav"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"
import SEO from "../components/seo"

const title = "Next Steps"

const ImproveModelArticle = () => (
  <article>
    <h2>Improving the RDF Model</h2>
    <p>
      Although the current accuracy of the Production model is over 75%,
      there are number of potential ways we can adjust the parameters
      of the model to improve the accuracy.
    </p>
    <p>
     With the training and validation data coming from catalogers using Sinopia
     to generate RDF, over time the more data we have, the better the models
     will be for predicting resource templates.
    </p>
  </article>
)

const MoveToProduction = () => (
  <article>
    <h2>Moving to Production</h2>
    <p>
      When the model's accuracy improves to be consistently over to 90%,
      we will create a simple web service (likely using AWS Lambda) that
      will accept an external RDF payload and return the best guess of what
      existing resource template best matches the RDF entity.
    </p>
    <p>
      The source code repository for RDF Classify project is
      at <a href="https://github.com/LD4P/rdf-classify">https://github.com/LD4P/rdf-classify</a>
    </p>
  </article>
)

const NextStepsPage = () => (
  <Layout>
    <SEO title={title} />
    <PageTitle title={title} />
    <ImproveModelArticle />
    <MoveToProduction />
    <FooterNavigation backTo='colab-notebook'
                      backLabel='Colab Notebook Demonstration'
                      nextTo='/'
                      nextLabel='Home'/>
  </Layout>
)

export default NextStepsPage

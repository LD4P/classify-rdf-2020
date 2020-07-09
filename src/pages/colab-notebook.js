import React from "react"

import PageTitle from "../components/page-title"
import FooterNavigation from "../components/footer-nav"
import Layout from "../components/layout"
import SEO from "../components/seo"


const title = "Colab Notebook Demonstration"

const ColabNotebookPage = () => (
  <Layout>
  <SEO title={title} />
  <PageTitle title={title} />
  <p>
    For the remainder of the presentation we will be using a Google
    Colab Notebook  
    at <a href="https://colab.research.google.com/drive/1HW_JwGYoHtAb95HR41Uu5hksB0a8OL8d?usp=sharing">
    https://colab.research.google.com/drive/1HW_JwGYoHtAb95HR41Uu5hksB0a8OL8d?usp=sharing
    </a>
  </p>
  <FooterNavigation backTo='data-frames'
                    backLabel='RDF Data Frames'
                    nextTo='next-steps'
                    nextLabel='Next Steps'/>
  </Layout>)

export default ColabNotebookPage

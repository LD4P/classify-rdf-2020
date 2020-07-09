import React from "react"

import PageTitle from "../components/page-title"
import Layout from "../components/layout"
import FooterNavigation from "../components/footer-nav"
import SEO from "../components/seo"

const title = "Background"

const BackgroundPage = () => (
  <Layout>
    <SEO title={title} />
    <PageTitle title={title} />
    <LDPArticle />
    <PyTorchFastAIArticle />
    <FooterNavigation backTo=''
                      backLabel='Start'
                      nextTo='sinopia-challenge'
                      nextLabel= 'Sinopia UI Challenge' />
  </Layout>
)

const LDPArticle = () => (
  <article>
    <h2>Linked Data for Production (LD4P)</h2>
    <p>
      Original funded by the Mellon Foundation, the Linked Data for Production is currently
      on it's third grant round for funding the implementation of linked data systems
      for libraries, museums, and other cultural heritage organizations.
    </p>
    <p>
     <a href="https://sinopia.io">Sinopia</a>, a cloud-based linked-data editor,
     was the primary product of the second LD4P grant cycle that started in 2018
     and ended in 2020. The third LD4P grant, that runs from 2020-2022 focuses
     on user-interface improvements in Sinopia as well as new backend processes for
     integrating Sinopia with third-parties like OCLC and ShareVDE.
    </p>
  </article>
)

const PyTorchFastAIArticle = () => (
  <article>
    <h2>PyTorch and FastAI</h2>
    <p>
      After initial experiments using Google's <a href="https://www.tensorflow.org/">TensorFlow</a>, an open source machine
      learning framework originally developed by Google, we switched to using
      the <a href="https://fast.ai">FastAI</a> machine learning libraries that is built on the
      open-source <a href="https://pytorch.org/">PyTorch</a> framework. This switch
      was driven in part by Jeremy taking the excellent <a href="https://course.fast.ai">
      Practical Deep Learning for Coder, v3</a> course offered by FastAI.
    </p>
  </article>
)

export default BackgroundPage

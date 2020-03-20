import React from "react"
import { Link } from "gatsby"
// import Img from "gatsby-image"

import PageTitle from "../components/page-title"
import FooterNavigation from "../components/footer-nav"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


import SinopiaLoadRDF from "../images/LoadRDF.mp4"
import SinopiaSearchVideo from "../images/SinopiaSearch.mp4"

const title = "Sinopia's Classifying RDF Challenge"

const SearchAndCloneRDFArticle = () => {
  return(<article>
    <h3>Search &amp; Cloning</h3>
    <blockquote>
      <p>
        <a href="https://www.share-vde.org/">ShareVDE</a> is a commerical
        service of Casalini that provides Linked Data lookups for a subset of
        Sinopia's cohort members.
      </p>
    </blockquote>
    <p>
      Searching external sources for RDF to clone into Sinopia starts with
      selecting an institution's ShareVDE authority from the drop-down list
      in the search tab. After a search is performed and results are returned,
      the user clicks on the <code>Clone</code> button and a pop-up modal is
      displayed that the user then searches for an existing resource template.
    </p>
    <p>
      Selecting a resource template, the Sinopia Editor attempts to load the
      RDF based on the propertyTemplates contained in the resource template. All
      triples that don't match the propertTemplates are displayed.
    </p>
    <video controls width="960">
      <source src={SinopiaSearchVideo} type="video/mp4"></source>
    </video>
    <p>
      Selecting
    </p>
  </article>)
}

const LoadRDFArticle = () => (
  <article>
    <h2>Loading RDF into Sinopia</h2>
    <video controls width="960">
      <source src={SinopiaLoadRDF} type="video/mp4"></source>
    </video>
  </article>
)
const SinopiaChallengePage = () => (
  <Layout>
    <SEO title={title} />
    <PageTitle title={title} />
    <div className="row">
      <div className="col">
        <SearchAndCloneRDFArticle />
      </div>
      <div className="col">
        <LoadRDFArticle />

      </div>
    </div>
    <FooterNavigation backTo='background'
                      backLabel="Background"
                      nextTo='resource-templates'
                      nextLabel='Resource Templates' />
  </Layout>
)

export default SinopiaChallengePage

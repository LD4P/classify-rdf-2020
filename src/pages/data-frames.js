import React from "react"

import PageTitle from "../components/page-title"
import FooterNavigation from "../components/footer-nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

import ProdDataFrame from "../images/prod-dataframe.png"

const title = "Pandas DataFrame"

const RDFDataFrameArticle = () => (
  <article>
    <h2>Sinopia RDF Data Frame</h2>
    <p>
      To construct a Data Frame from Sinopia's RDF data, each resource is represented by a Series that starts with
      three values:
    </p>
    <ul>
	<li><strong>resource URI or skolemized blank node</strong></li>
        <li><strong>group</strong> string of what group the resource belongs to; in Sinopia this is the name of institution or organization</li>
        <li><strong>resource template</strong></li>
    </ul>
    <p>For the remaining labels in the Pandas Series, all of the predicate <em>propertyTemplate</em> URIs in each resource template is used with the
       values being a count of how often that a predicate is found in resource. For labeled predicates that are not present for a specific
       resource then a count of 0 is used.
    </p>
    <img src={ProdDataFrame} alt="Production Pandas Dataframe" />
  </article>
)

const PandasDataFramePage = () => (
  <Layout>
    <SEO title={title} />
    <PageTitle title={title} />
    <p>
      <a href="https://pandas.pydata.org/">Pandas</a> is a widely used open-source data visualization and
      analysis Python tool that is used in two very popular machine-learning
      projects, <a href="https://www.tensorflow.org/">Tensorflow</a> and <a href="https://pytorch.org/">PyTorch</a>.
    </p>
    <p>
     Pandas provides a two-dimensional labeled data structure with columns of potentially different types
     called a <a href="https://pandas.pydata.org/pandas-docs/stable/getting_started/dsintro.html#dataframe">Data Frame</a>.
     A Data Frame is similar in concept to a spreadsheet with significant added functionality. The equivalent of a spreadsheet
     row in Pandas is a <a href="https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.Series.html">Series</a> made
     of labels and values.
    </p>
    <RDFDataFrameArticle />
    <FooterNavigation backTo='resource-templates'
                      backLabel="Resource Templates"
                      nextTo='colab-notebook'
                      nextLabel="Colab Notebook Demonstration" />
  </Layout>
)

export default PandasDataFramePage

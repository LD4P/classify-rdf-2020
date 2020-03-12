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
    <p>
      Taking a hybrid approach to classifying incoming RDF, we will use as
      the resource template as a label or class for the existing RDF created in
      the three Sinopia environments; development, staging, and production.
    </p>
  </article>
)

const RDFNumpyMatixArticle = () => (
  <article>
    <h2>RDF Subjects-Predicates as a Matrix</h2>
    <p>
      The first approach we used was treating an incoming URI as a text string
      and then map each character in a row with it's position noted by the
      valid URL characters.
    </p>
    <code>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;=</code>
    <h3>Example</h3>
    <p>
      To calculate a matrix for the <code>http://www.w3.org/1999/02/22-rdf-syntax-ns#type</code> URI,
      one of the most common predicates, each character in the URI is assigned a
      position based on it's position in the valid URL list. A zero-padded
      vector of length 84 (the number of valid URL characters above) is created
      and the position of the character in the vector is assigned a value of 1.
    </p>
    <table className="primary">
      <thead>
        <tr>
          <th>Character</th>
          <th>Position</th>
          <th>Vector</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>h</td>
          <td>33</td>
          <td><code>000000000000000000000000000000000100000000000000000000000000000000000000000000000000</code></td>
        </tr>
        <tr>
          <td>t</td>
          <td>45</td>
          <td><code>000000000000000000000000000000000000000000000100000000000000000000000000000000000000</code></td>
        </tr>
        <tr>
          <td>t</td>
          <td>45</td>
          <td><code>000000000000000000000000000000000000000000000100000000000000000000000000000000000000</code></td>
        </tr>
        <tr>
          <td>p</td>
          <td>41</td>
          <td><code>000000000000000000000000000000000000000001000000000000000000000000000000000000000000</code></td>
        </tr>
        <tr>
          <td>:</td>
          <td>66</td>
          <td><code>000000000000000000000000000000000000000000000000000000000000000000100000000000000000</code></td>
        </tr>
        <tr>
          <td>/</td>
          <td>67</td>
          <td><code>000000000000000000000000000000000000000000000000000000000000000000010000000000000000</code></td>
        </tr>
        <tr>
          <td>/</td>
          <td>67</td>
          <td><code>000000000000000000000000000000000000000000000000000000000000000000010000000000000000</code></td>
        </tr>
        <tr>
          <td>w</td>
          <td>48</td>
          <td><code>000000000000000000000000000000000000000000000000100000000000000000000000000000000000</code></td>
        </tr>
        <tr>
          <td>w</td>
          <td>48</td>
          <td><code>000000000000000000000000000000000000000000000000100000000000000000000000000000000000</code></td>
        </tr>
        <tr>
          <td>w</td>
          <td>48</td>
          <td><code>000000000000000000000000000000000000000000000000100000000000000000000000000000000000</code></td>
        </tr>
        <tr>
          <td>.</td>
          <td>63</td>
          <td><code>000000000000000000000000000000000000000000000000000000000000000100000000000000000000</code></td>
        </tr>
        <tr>
          <td>w</td>
          <td>48</td>
          <td><code>000000000000000000000000000000000000000000000000100000000000000000000000000000000000</code></td>
        </tr>
        <tr>
          <td>3</td>
          <td>55</td>
          <td><code>000000000000000000000000000000000000000000000000000000010000000000000000000000000000</code></td>
        </tr>
        <tr>
          <td>.</td>
          <td>63</td>
          <td><code>000000000000000000000000000000000000000000000000000000000000000100000000000000000000</code></td>
        </tr>
        <tr>
          <td>o</td>
          <td>40</td>
          <td><code>000000000000000000000000000000000000000010000000000000000000000000000000000000000000</code></td>
        </tr>
        <tr>
          <td>r</td>
          <td>43</td>
          <td><code>000000000000000000000000000000000000000000010000000000000000000000000000000000000000</code></td>
        </tr>
        <tr>
          <td>g</td>
          <td>32</td>
          <td><code>000000000000000000000000000000001000000000000000000000000000000000000000000000000000</code></td>
        </tr>
      </tbody>
    </table>
  </article>
)

const RDFUriHashArticle = () => (
  <article>
    <h2>RDF Subjects-Predicates as a Hash Matrix</h2>
  </article>
)

const TensorFlowPage = () => (
  <Layout>
    <SEO title="TensorFlow Data Models" />
    <PageTitle title={title} />
    <ResourceTemplateLabelsArticle />
    <RDFNumpyMatixArticle />
    <RDFUriHashArticle />
    <FooterNavigation backTo='sinopia-challenge'
                      backLabel='Sinopia UI Challenge'
                      nextTo='model-training'
                      nextLabel= 'Training RDF Classification models' />
  </Layout>
)

export default TensorFlowPage

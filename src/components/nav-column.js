import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"


const StackLink = (props) => {
  return (
    <span class="button stack">
      <Link to={props.link}
            className="toc-link">{props.label}</Link>
    </span>
  )
}

const NavColumn = ({ data }) => {
  data = useStaticQuery(graphql`
    query AllPagesQuery {
      allSitePage {
        edges {
          node {
            id
            path
            internal {
              description
            }
          }
        }
      }
    }
  `)
  return(
    <div style={{ margin: '1em'}}>
      <StackLink link='background' label='Background' />
      <StackLink link='sinopia-challenge' label="Sinopia's Classifying RDF Challenge" />
      <StackLink link='resource-templates' label='Resource Templates' />
      <StackLink link='tf-data-models' label='TensorFlow Data Models' />
      <StackLink link='model-training' label='Training Data Models' />
      <StackLink link='initial-results' label='Initial Results' />
      <StackLink link='next-steps' label='Next Steps' />
    </div>)}


export default NavColumn

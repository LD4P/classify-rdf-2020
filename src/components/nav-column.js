import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"


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
    <div>
      <ul>
      <li>Before </li>
      </ul>
      <pre>
    {JSON.stringify(data, null, 4)}
      </pre>
    </div>)}


export default NavColumn

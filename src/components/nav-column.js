import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const NavColumn = (props) => {
  // const { pages } = useStaticQuery(
  //   graphql`
  //     query {
  //       pages {
  //           title
  //         }
  //       }
  //   `
  // )

  return(<div className="pres-nav">
          <ul>
            <li>Background</li>
          </ul>
      </div>)
}

export default NavColumn

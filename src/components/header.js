import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <h3>A Machine Learning Approach for Classifying Sinopia's RDF</h3>
      </h1>
      <a
        href="https://ld4p.github.io/classify-rdf-2020/"
        style={{
          color: 'white',
          fontWeight: 'bold',
        }}>
        https://ld4p.github.io/classify-rdf-2020/
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

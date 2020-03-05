import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const FooterNavigation = (props) => {
  return (
    <nav>
      Back <Link to={props.backTo}>{props.backLabel}</Link>,
      next <Link to={props.nextTo}>{props.nextLabel}</Link>.
    </nav>
  )
}

export default FooterNavigation

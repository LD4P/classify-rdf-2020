import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const FooterNavigation = (props) => {
  return (
    <div>
      <Link className="button" to={props.backTo}>&laquo; {props.backLabel}</Link>
      <Link className="button ld4_lime_bk" to={props.nextTo}>{props.nextLabel} &raquo;</Link>
    </div>
  )
}

export default FooterNavigation

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header className="level" style={{marginTop: '20px'}}>
    <p className="level-item has-text-centered">
      <a className="link is-info has-text-dark-grey">Life</a>
    </p>
    <p className="level-item has-text-centered">
      <a className="link is-info has-text-dark-grey">Work</a>
    </p>
    <div className="level-item has-text-centered">
      <h1 className='title is-2'>PJ Murray</h1>
    </div>
    <p className="level-item has-text-centered">
      <a className="link is-info has-text-dark-grey">Writing</a>
    </p>
    <p className="level-item has-text-centered">
      <a className="link is-info has-text-dark-grey">Contact</a>
    </p>
  </header>
)

Header.propTypes = {
  // siteTitle: PropTypes.string,
}

Header.defaultProps = {
  // siteTitle: ``,
}

export default Header

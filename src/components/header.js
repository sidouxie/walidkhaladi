import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo-wk.svg"

const Header = ({ siteTitle }) => (
  <header>
      <nav>
        <input type="checkbox" id="nav" className="hidden"></input>
              <label htmlFor="nav" className="nav-btn">
                  <i></i>
                  <i></i>
                  <i></i>
              </label>
        <div className="logo">
        <Link
          to="/"
          style={{
            color: `hsla(0, 0%, 0%, 0.8)`,
            textDecoration: `none`,
          }}
        >
          <img src={logo} alt="Walid Khaladi Logo" id="site-logo"></img>
        </Link>
        </div>      
        <div className="nav-wrapper">
          <ul style={{margin:'0', padding:'0', listStyle:'none'}}>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/portrait">Portrait</Link></li>
            <li><Link to="/nature">Nature</Link></li>
            <li><Link to="/about">à Propos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
  
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

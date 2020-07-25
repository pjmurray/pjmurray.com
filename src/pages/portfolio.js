import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Here are some things I've built...</h1>
    <div>
      <h2>Flaunter.com</h2>
    </div>
    <div>
      <h2>brb.life</h2>
    </div>
    <div>
      <h2>10words.co</h2>
    </div>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Portfolio

import React, { Fragment, useState } from "react"
import "./mystyles.scss"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
// import Image from "../components/image"
import SEO from "../components/seo"

const Newsletter = () => (
  <div className="has-text-centered" style={{marginTop: '100px'}}>
    <h2 className='title is-5'> Please subscribe to my newsletter</h2>
    <iframe src="https://pjmurray.substack.com/embed" width="100%" height="320" style={{border:'1px solid #EEE', background :'white'}} frameborder="0" scrolling="no"></iframe>
  </div>
)

const IndexPage = () => {
  const [scrolled, setScrolled] = useState(false)
  function handleScroll () {
    setScrolled(true)
  }

  return (
    <Fragment>
      <Header/>
      <SEO title="Home" />
      <main className="main_content" onscroll={handleScroll}>
        <div className="section">
          <div className="container">
          <div className="columns is-centered">
            <div className="column is-8">
            <div className="content">
              <p> Hi there,</p>
              <p> This is currently a work in progress</p>
              <p> Please come back later.</p>
              <p> - PJ</p>
            </div>
            <Newsletter/>
          </div>
          </div>
          </div>
        </div>
      </main>
      <Footer/>
  </Fragment>
  )
}
export default IndexPage

// import React, { Fragment, useState } from "react"
import React, { Fragment } from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

// import Layout from "../components/layout"
// import Header from "../components/header"
import Footer from "../components/footer"
// import Image from "../components/image"
import SEO from "../components/seo"

// const Newsletter = () => (
//   <div className="has-text-centered" style={{marginTop: '100px'}}>
//     <h2 className='title is-5'> Please subscribe to my newsletter</h2>
//     <iframe src="https://pjmurray.substack.com/embed" width="100%" height="320" style={{border:'1px solid #EEE', background :'white'}} frameborder="0" scrolling="no"></iframe>
//   </div>
// )

            // <ul>
            // <li ><Link to="#work">Work</Link></li>
            // <li><Link to="#projects">Side projects</Link></li>
            // <li><Link to="#contact">Contact</Link></li>
            // </ul>



const IndexPage = () => {
  // const [scrolled, setScrolled] = useState(false)
  function handleScroll () {
    // setScrolled(true)
  }

  return (
    <Fragment>
      <SEO title="PJ Murray | Software Engineer & Startup Guy" />
      <main className="font-mono" onScroll={handleScroll}>
          <div className="container mx-auto">
          <div className="md:mt-32 mt-20">
            <div className="">

            </div>
            <div className="xs:w-full md:flex justify-center xs:relative">
              <div className='text-right md:mr-6 max-w-lg px-4'>
                <h1 className="mb-8"><span role="img">👋</span> Hey there, <br className="md:hidden"/>it's PJ Murray.</h1>
                <div className="leading-loose">
                  <p className="mb-4">I'm a customer centric, <br className="md:hidden"/> full-stack engineer<br/>who works with early stage startups<br/>to ship mission critical projects.</p>
                  <p className="mb-6"><span className='md:hidden'>i.e. </span><span className='hidden sm:block'>Most recently with:</span>  
                  <OutboundLink  rel="nofollow" href="https://flaunter.com" target='_blank'>Flaunter</OutboundLink> & <OutboundLink rel="nofollow" href="https://getvero.com" target='_blank'>Vero</OutboundLink>.
                  
                  </p>
                  <p className="mb-4">
                    I founded Elto which was <br class="md:hidden"/><a rel="nofollow" href="https://techcrunch.com/2015/04/10/godaddy-acquires-elto-marketplace-for-web-pros/">acquired by GoDaddy</a>.</p>
                  <p className="mt-10"> Contact me via <a href="mailto:pj.murray.nz@gmail.com">email.</a></p>
                </div>
              </div>
              <div className='md:mr-48 flexShrink: 0:mr-0 opacity-20 hidden md:block'>
                <img src={'/face-wide.png'} alt="PJ Murray" className='h-full w-auto max-w-none'  />
              </div>
            </div>
            <div className='text-center mt-20'>
              <p className='text-sm'><a href="https://www.linkedin.com/in/pjmurraynz/">LinkedIn</a> | <a rel="nofollow" href="https://www.instagram.com/pjmurraynz/">Instagram</a></p>
             </div>
            </div>
        </div>
      </main>
      <Footer/>
  </Fragment>
  )
}
export default IndexPage

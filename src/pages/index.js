import React from "react"
import Header from "../components/Header/Header"
import About from "../components/About/About"
import Project from "../components/Projects/Project"
import Footer from "../components/Footer/Footer"
import '../components/app.scss'
import {Helmet} from 'react-helmet' 
import favicon from '../img/favicon.ico' 

// markup
const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" href={favicon} type="image/x-icon"/>
        <title>Portfolio | Pranjal</title>
      </Helmet>
      <Header/>
      <About/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default IndexPage

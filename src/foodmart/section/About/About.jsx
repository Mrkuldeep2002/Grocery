import React from 'react'
import Header from '../comman/header/header'
import Welcome from './welcome/welcome' 
import './about.css'
import Provide from './provide/provide'
import Performance from './performance/performance'
import Bg_team from './bg&ourteam/bg&ourteam'

import News from "../comman/newsletter/news";
import Footer from '../comman/footer/footer'

const About = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Provide />
      <Performance />
      <Bg_team />
      <News />
      <Footer />
    </div>
  )
}

export default About

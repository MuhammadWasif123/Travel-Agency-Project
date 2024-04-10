import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Memory from './components/Memory/Memory'
import Explore from './components/Explore/Explore'
import Advertise from './components/Advertise/Advertise'
import Pricing from './components/Pricing/Pricing'
import Banner from './components/Banner/Banner'
import Newsletter from './components/Newsletter/Newsletter'
import {hero,navlinks,memory,placesAPI,brands,pricingapi,bannerAPI,footerAPI} from './data/travigodata'

const App = () => {
  return (
  <>
  <Navbar navlinks={navlinks}/>
  <Hero hero={hero} />
  <Memory memory={memory} />
  <Explore title="Explore The Beauty of World" placesAPI={placesAPI}  />
  <Advertise brands={brands} />
  <Pricing pricingapi={pricingapi} />
  <Banner bannerAPI={bannerAPI} />
  <Newsletter/>
  <Footer footerAPI={footerAPI} />
  </>
  )
}

export default App
import React from 'react'
import Header from '../../components/Layout/Header'
import Hero from '../../components/Route/Hero/Hero'
import Categories from '../../components/Route/Categories/Categories'
import BeastDeal from '../../components/Route/BeastDeal/BeastDeal'
import Events from '../../components/Events/Events'
import FeaturedProduct from '../../components/Route/FeaturedProduct/FeaturedProduct'
import Sponsored from "../../components/Route/Sponsored"
import Footer from '../../components/Layout/Footer.jsx'

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1}/>
        <Hero/>
        <Categories/>
        <BeastDeal/>
        <Events/>
        <FeaturedProduct/>
        <Sponsored/>
        <Footer/>
    </div>
  )
}

export default HomePage
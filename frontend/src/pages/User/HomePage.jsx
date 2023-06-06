import React from 'react'
import Header from '../../components/Layout/Header'
import Hero from '../../components/User/Home/Hero/Hero'
import Categories from '../../components/User/Home/Categories/Categories'
import BeastDeal from '../../components/User/Home/BeastDeal/BeastDeal'
import Events from '../../components/User/Events/Events'
import FeaturedProduct from '../../components/User/Home/FeaturedProduct/FeaturedProduct'
import Sponsored from "../../components/User/Home/Sponsored"
import Footer from '../../components/Layout/Footer'

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
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StripHeader from './assets/component/StripHeader'
import Header from './assets/component/Header'
import Hero from './assets/component/Hero'
import Information from './assets/component/Information'
import Services from './assets/component/Services'
import Buy from './assets/component/Buy'
import Beauty from './assets/component/Beauty'
import Featured from './assets/component/Featured'
import Products from './assets/component/Products'
import FeaturedCategory from './assets/component/FeaturedCategory'
import Brands from './assets/component/Brands'
import Gallery from './assets/component/Gallery'
import Blog from './assets/component/Blog'
import Fproduct from './assets/component/Fproduct'
import Review from './assets/component/Review'
import Mostview from './assets/component/Mostview'
import SocialIcon from './assets/component/SocialIcon'
import Footer from './assets/component/Footer'
import StripFooter from './assets/component/StripFooter'
import BlogCr from './assets/component/BlogCr'







import '@fortawesome/fontawesome-free/css/all.min.css';






function App() {
  

  return (
    <div className='bg-slate-50'>
      
  <StripHeader/>
  <Header/>
  <Hero/>
  <Information/>
  <Services/> 
  <Buy/>

  <Beauty/>
  <Featured/>
  <Products/>
  <Fproduct/>
  {/* <FeaturedCategory/> */}
  <Brands/>
  <Gallery/>
  <Blog/>
  <BlogCr/>
  <Review/> 
  <Mostview/>
  <SocialIcon/>
 
   <Footer/>
  <StripFooter/>


    </div>
  )
}

export default App

import React from 'react'
import Navbar from './components/Navbar'
import EmblaCarousel from './js/EmblaCarousel'
import './css/embla.css'
const OPTIONS = { loop: true }
const SLIDE_COUNT = 6
const SLIDES = [
  '/hero_img/hero1.jpg',
  '/hero_img/hero2.jpg',
  '/hero_img/hero3.jpg',
  '/hero_img/hero4.jpg',
  '/hero_img/hero5.jpg',
    '/hero_img/hero6.jpg'
]

const App = () => {
  return (
    <div className=''>
                <Navbar/>

          <EmblaCarousel slides={SLIDES} options={OPTIONS} />

    </div>
  )
}

export default App

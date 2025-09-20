import React, { Profiler } from 'react'
import  { logo_black } from '../assets/assets.js'
import {  Search, ShoppingBasket, ShoppingCart, User2Icon } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='h-40 flex   justify-center items-center ' >
      <div className='gap-5 flex flex-col'>

  <div className='flex h-auto justify-center items-center'>
    <img className='w-50 h-20' src={logo_black} alt="" />
  </div>
<div>
<ul className='flex gap-10 text-sm'>
  <li>MEN</li>
  <li>WOMEN</li>
  <li>ACCESSORIES</li>
  <li>SALE</li>
</ul>
</div>
      </div>

<div className=' '>
  <ul className='flex gap-8 top-15 absolute right-6 text-sm'>
<li><User2Icon /></li>
<li><Search /></li>
<li><ShoppingCart /></li>
  </ul>
</div>

    </div>
  )
}

export default Navbar

import React from 'react'

import Color from './Color'
import StyleType from './StyleType'
import Price from './Price'
import Gender from './Gender'
import '../styles/sidebar.css'



const SideBar = ({handleChange}) => {
  return (
    <section className='sidebar-container'>
      <h3>Filters</h3>
      
      <StyleType handleChange={handleChange} />
      <Gender handleChange={handleChange}/>
      <Color handleChange={handleChange}/>
      <Price handleChange={handleChange}/>
    </section>
  )
}

export default SideBar
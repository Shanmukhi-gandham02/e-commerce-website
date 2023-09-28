import React from 'react'

const Price = ({handleChange}) => {
  return (
    <div className='ml'>
      <h4 className="sidebar-title price-title">Price</h4>
      
      <label className="sidebar-label-container">
          <input onChange={handleChange} value={300} type="radio" name='test'/>
          <span className="checkmark"></span> less than ₹300
      </label>
      <label className="sidebar-label-container">
          <input onChange={handleChange} value={400} type="radio" name='test'/>
          <span className="checkmark"></span> ₹300 - ₹400
      </label>
      <label className="sidebar-label-container">
          <input onChange={handleChange} value={500} type="radio" name='test'/>
          <span className="checkmark"></span> ₹400 - ₹500
      </label>
    </div>
  )
}

export default Price
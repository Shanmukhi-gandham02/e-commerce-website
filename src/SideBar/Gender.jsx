import React from 'react'

const Gender = ({handleChange}) => {
  return (
    <div>
      <h4 className="sidebar-title price-title">Gender</h4>
    
      <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="men" name='test'/>
          <span className="checkmark"></span> Men
      </label>
      <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="women" name='test'/>
          <span className="checkmark"></span> Women
      </label>
      
    </div>
  )
}

export default Gender
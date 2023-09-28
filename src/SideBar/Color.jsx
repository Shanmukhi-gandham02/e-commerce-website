import React from 'react'

const Color = ({handleChange}) => {
  return (
    <div >
      <h4 className="sidebar-title price-title">Color</h4>
      
      <label className="sidebar-label-container">
          <input onChange={handleChange} value='black' type="radio" name='test'/>
          <span className="checkmark"></span> Black
      </label>
      <label className="sidebar-label-container">
          <input onChange={handleChange} value='blue' type="radio" name='test'/>
          <span className="checkmark"></span> Blue
      </label>
      <label className="sidebar-label-container">
          <input onChange={handleChange} value='red' type="radio" name='test'/>
          <span className="checkmark"></span> Red
      </label>
      <label className="sidebar-label-container">
          <input onChange={handleChange} value='green' type="radio" name='test'/>
          <span className="checkmark"></span> Green
      </label>
      <label className="sidebar-label-container">
          <input onChange={handleChange} value='purple'type="radio" name='test'/>
          <span className="checkmark"></span> Purple
      </label>
      <label className="sidebar-label-container">
          <input onChange={handleChange} value='yellow' type="radio" name='test'/>
          <span className="checkmark"></span> Yellow
      </label>
      <label className="sidebar-label-container">
          <input onChange={handleChange} value='white'type="radio" name='test'/>
          <span className="checkmark"></span> White
      </label>
      <label className="sidebar-label-container">
          <input onChange={handleChange} value='grey' type="radio" name='test'/>
          <span className="checkmark"></span> Grey
      </label>
      <label className="sidebar-label-container">
          <input onChange={handleChange} value='pink' type="radio" name='test'/>
          <span className="checkmark"></span> Pink
      </label>
    </div>
  )
}

export default Color
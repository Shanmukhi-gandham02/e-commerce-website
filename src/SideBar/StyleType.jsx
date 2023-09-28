import React from 'react'

const StyleType = ({handleChange}) => {
  return (
    <div>
        <h4 className="sidebar-title ">Style Type</h4>
        <div className='sidebar-items'>
            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value="" name='test'/>
                <span className="checkmark"></span> All
            </label>
            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value="polo" name='test'/>
                <span className="checkmark"></span> Polo
            </label>
            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value="hoodie" name='test' />
                <span className="checkmark"></span> Hoodie
            </label>
            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value="basic"  name='test'/>
                <span className="checkmark"></span> Basic
            </label>
            
        </div>
        </div>
  )
}

export default StyleType
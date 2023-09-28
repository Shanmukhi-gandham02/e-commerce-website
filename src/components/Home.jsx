import React from 'react'
//import productData from '../data/productsData.json'
import SearchIcon from '@mui/icons-material/Search';

import '../styles/home.css'

import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import SideBar from '../SideBar/SideBar';

const Products = ({result}) => {
  
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  return (
    <div className="list">
      { result.length >0 ? result.map((product) => (
      <div className="card card-title list-view-item" key={product.id}>
        <img src={product.imageURL} alt={product.name} className='image' />
        <p> {product.name} </p>
        <span> ₹ {product.price} </span>
        <button 
            className='glow-on-hover' 
            onClick={() => handleAddToCart(product)}>
              Add to cart
        </button>
        </div>
    )) : ( <div className='not-found'>No results Found</div> )} 
    
    </div>
  )
}

const Home = ({handleChange, query, handleInputChange, result}) => {
  console.log(query)
  return (
    <div className='home'>
      <div className="side-bar">
       <SideBar handleChange={handleChange} />
      </div>
      <div className="main">
      <div className="search-container">
        <button className='btn'><SearchIcon /></button>
        <input 
            type="search" 
            onChange={handleInputChange} 
            value={query} 
            placeholder="Search here" 
            className='search-input' />

            
      </div>
      
       <Products result={result} />
      </div>
    </div>
  )
}

export default Home
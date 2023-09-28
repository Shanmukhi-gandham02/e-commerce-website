import React from 'react'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import '../styles/nav.css'
import { useSelector } from 'react-redux';

const Nav = () => {
   
    const {totalQty} = useSelector(state => state.cart)

  return (
    <nav className='nav-bar'>
        <NavLink to='/'><h2>TeeNique Store</h2></NavLink>
        
        
        <div className="navigation" >
            <div className="menu">
                <div className="products">
                <NavLink 
                    to='/' 
                    className={(navClass)=> navClass.isActive ? 'nav-active' : ''} >
                    Products
                </NavLink>
                </div>
            
            
                <span className="cart-icon">
                    <NavLink to='/cart'>
                    <ShoppingCartIcon fontSize='large' color='primary'/>
                    <span className="badge">{totalQty}</span>
                    </NavLink> 
                </span>

                
            </div>
        </div>
        
    </nav>
  )
}

export default Nav

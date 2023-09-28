import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import ArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Link } from 'react-router-dom';

import '../styles/cart.css'
import { addToCart, calculateTotals, clearcart, decreaseQty, removeFromCart } from '../redux/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  }

  const handleDecreaseQty = (item) => {
    dispatch(decreaseQty(item));
  }

  const handleIncreaseQty = (item) => {
    dispatch(addToCart(item));
  }

  const handleClearCart = () => {
    dispatch(clearcart());
  }

  return (
    <div className='cart-container'>
        <h2>Shopping Cart</h2>
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>You cart is currently empty</p>
            <div className="start-shopping">
            <Link to='/'>
                <ArrowLeftIcon fontSize='large' />
                <span>Start Shopping</span>
            </Link>
            </div>
          </div>
        ):(
          <div>
            <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
            <div className="cart-items">
                {cart.cartItems?.map(item => (
                  <div className="cart-item" key={item.id}>
                    
                    <div className="cart-product">
                      
                      <img src={item.imageURL} alt={item.name} />
                      <div className="details">
                        <h3>{item.name}</h3>
                        <button onClick={() => handleRemoveFromCart(item)}><DeleteIcon fontSize='large'/></button>
                      </div>
                      
                    </div>
                      <div className="cart-product-price">₹{item.price}</div>

                      <div className="cart-product-quantity">
                        <button onClick={() => handleDecreaseQty(item)}>➖</button>
                        <div className="count">{item.cartQty}</div>
                        <button onClick={() => handleIncreaseQty(item)}>➕</button>
                      </div>

                      <div className="cart-product-total-price">
                        ₹{item.price * item.cartQty}
                      </div>
                    
                  </div>
                ))}
            </div>
            <div className="cart-summary">
            <button className="clear-btn" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span className='sub-total'>Subtotal</span>
                  <span className="amount">₹ {cart.totalAmount}</span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <button>Check Out</button>
                <div className="continue-shopping">
                  <Link to='/'>
                      <ArrowLeftIcon fontSize='large' />
                      <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          
        )}
    </div>
  )
}

export default Cart
import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
    cartItems: localStorage.getItem("cartItems")  
                ? JSON.parse(localStorage.getItem("cartItems")) 
                : [],
    totalQty:0,
    totalAmount:0,
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart(state, action){
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            
            state.totalQty++

            if (itemIndex >= 0){
                
                //checking it quantity is exceeded
                if (state.cartItems[itemIndex].cartQty > state.cartItems[itemIndex].quantity){
                    alert("The chosen quantity exceeded the product's available stock.");
                }
                else{state.cartItems[itemIndex] = {
                    ...state.cartItems[itemIndex],
          cartQty: state.cartItems[itemIndex].cartQty + 1,
                };
                toast.info(`increased ${action.payload.name} quantity`);}
            } else{
                const tempProduct = {...action.payload, cartQty:1};
                state.cartItems.push(tempProduct);
                console.log("first time product",tempProduct.cartQty)
                toast.success(`${action.payload.name} added to cart`);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            
        },

        removeFromCart(state, action){
            const nextCartItems = state.cartItems.filter(
                item => item.id !== action.payload.id
            );

            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error(`${action.payload.name} is removed!`)
        },

        decreaseQty(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (state.cartItems[itemIndex].cartQty > 1) {
                state.cartItems[itemIndex].cartQty -= 1;
            }else if (state.cartItems[itemIndex].cartQty === 1 ){
                const nextCartItems = state.cartItems.filter(
                    item => item.id !== action.payload.id
                );
    
                state.cartItems = nextCartItems;
                toast.error(`${action.payload.name} is removed!`);
            }
            
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));    
    },

    clearcart(state, action){
        state.cartItems = [];
        toast.error('Cart cleared');
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    calculateTotals(state, action){
        let { total, quantity } = state.cartItems.reduce(
            (cartTotal, item) => {
              const { price, cartQty } = item;
              console.log(cartQty);
              const itemTotal = price * cartQty;
    
              cartTotal.total += itemTotal;
              cartTotal.quantity += cartQty;
              
              return cartTotal;
            },
            {
              total:0,
              quantity: 0,
            }
          );
          
          state.totalQty = quantity;
          state.totalAmount = total;
        },
    
}});

export const {addToCart, removeFromCart, decreaseQty, clearcart, calculateTotals} = cartSlice.actions;

export default cartSlice.reducer;

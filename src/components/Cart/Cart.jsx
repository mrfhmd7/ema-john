import React from 'react';
import './Cart.css'

const Cart = (props) => {
     // console.log(props.cart);
     const { cart, handleClearCart, children } = props;

     let totalPrice = 0;
     let totalShipping = 0;
     let quantity = 0;

     for (const product of cart) {

          // option 1
          // if (product.quantity === 0) {
          //      product.quantity = 1
          // }

          // option 2
          // product.quantity = product.quantity || 1;

          totalPrice = totalPrice + product.price * product.quantity;
          totalShipping = totalShipping + product.shipping * product.quantity;
          quantity = quantity + product.quantity;
     }

     const tax = (totalPrice * 3) / 100;
     const grandTotal = totalPrice + totalShipping + tax;

     return (
          <div className='cart'>
               <h5>Order summary</h5>
               <p>Selected item: {quantity}</p>
               <p>Total price: ${totalPrice}</p>
               <p>Total shipping charge: ${totalShipping}</p>
               <p>Tax: ${tax.toFixed(2)}</p>
               <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
               <button onClick={handleClearCart} className='btn-clear-cart'>
                    <span>Clear Cart</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">
                         <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                    </svg>
               </button>
               {children}
          </div>
     );
};

export default Cart;
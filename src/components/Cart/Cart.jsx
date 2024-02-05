import React from 'react';
import './Cart.css'

const Cart = (props) => {
     // console.log(props.cart);
     const { cart } = props;

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
          </div>
     );
};

export default Cart;
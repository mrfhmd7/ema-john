import React from 'react';
import './Cart.css'

const Cart = (props) => {
     // console.log(props.cart);
     const { cart } = props;
     
     let totalPrice = 0;
     let totalShipping = 0;

     for (const product of cart) {
          totalPrice = totalPrice + product.price;
          totalShipping = totalShipping + product.shipping;
     }
     
     const tax = totalPrice * 7 / 100;

     const grandTotal = totalPrice + totalShipping + tax;

     return (
          <div className='cart'>
               <h5>Order summary</h5>
               <p>Selected item: {cart.length}</p>
               <p>Total price: ${totalPrice}</p>
               <p>Total shipping charge: ${totalShipping}</p>
               <p>Tax: ${tax}</p>
               <h6>Grand Total: ${grandTotal}</h6>
          </div>
     );
};

export default Cart;
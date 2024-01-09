import React from 'react';
import './Cart.css'

const Cart = (props) => {
     console.log(props.cart);
     const {cart} = props;
     return (
          <div className='cart'>
               <h5>Order summary</h5>
               <p>Selected item: {cart.length}</p>
               <p>Total price: $</p>
               <p>Total shipping charge: $</p>
               <p>Tax: $</p>
               <h6>Grand Total: $</h6>
          </div>
     );
};

export default Cart;
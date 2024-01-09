import React from 'react';
import './Cart.css'

const Cart = (props) => {
     // console.log(props.cart);
     const { cart } = props;
     
     let total = 0;
     for (const product of cart) {
          total = total + product.price;
          // console.log(total);
     }
     
     return (
          <div className='cart'>
               <h5>Order summary</h5>
               <p>Selected item: {cart.length}</p>
               <p>Total price: ${total}</p>
               <p>Total shipping charge: $</p>
               <p>Tax: $</p>
               <h6>Grand Total: $</h6>
          </div>
     );
};

export default Cart;
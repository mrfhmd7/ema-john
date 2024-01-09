import React from 'react';

const Cart = (props) => {
     console.log(props);
     const {cart} = props;
     return (
          <div>
               <h4>Order summary</h4>
               <p>Selected item: {cart.length}</p>
          </div>
     );
};

export default Cart;
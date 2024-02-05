import React from 'react';
import Cart from '../Cart/Cart';

const Orders = () => {
     return (
          <div className='shop-container'>
               <div className='product-container'>
                    <h2>This is order page.</h2>
               </div>
               <div className='cart-container'>
                    <Cart cart={[]} />
               </div>
          </div>
     );
};

export default Orders;
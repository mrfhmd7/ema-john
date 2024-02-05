import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
     const products = useLoaderData();

     return (
          <div className='shop-container'>
               <div className='product-container'>
                    <h2>Ordered Product:{products.length}</h2>
               </div>
               <div className='cart-container'>
                    <Cart cart={[]} />
               </div>
          </div>
     );
};

export default Orders;
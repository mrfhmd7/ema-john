import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
     const savedCart = useLoaderData();

     const [cart, setCart] = useState(savedCart);

     const handleClearCart = () => {
          setCart([]);
          deleteShoppingCart();
     };

     const handleRemoveFromCart = (id) => {
          const remaining = cart.filter(product => product.id !== id);
          setCart(remaining);
          removeFromDb(id);
     };

     return (
          <div className='shop-container'>
               <div className='review-container'>
                    {
                         cart.map(product => <ReviewItem
                              key={product.id}
                              product={product}
                              handleRemoveFromCart={handleRemoveFromCart}
                         />)
                    }
               </div>
               <div className='cart-container'>
                    <Cart
                         cart={cart}
                         handleClearCart={handleClearCart}
                    >
                         <Link className='btn-link' to='/checkout'>
                              <button className='btn-review-proceed'>
                                   <span>Proceed Checkout</span>
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                   </svg>
                              </button>
                         </Link>
                    </Cart>
               </div>
          </div>
     );
};

export default Orders;
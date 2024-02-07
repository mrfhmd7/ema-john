import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {

     const [products, setProducts] = useState([]);

     const [cart, setCart] = useState([]);

     const handleAddToCart = (product) => {
          let newCart = [];
          // const newCart = [...cart, product];

          //if product doesn't exist in the cart, then set quantity = 1
          // if exists update quantity by adding 1

          const exists = cart.find(pd => pd.id === product.id);
          if (!exists) {
               product.quantity = 1;
               newCart = [...cart, product];
          }
          else {
               exists.quantity = exists.quantity + 1;
               const remaining = cart.filter(pd => pd.id !== product.id);
               newCart = [...remaining, exists];
          }

          setCart(newCart);
          addToDb(product.id);
     }

     const handleClearCart = () => {
          setCart([]);
          deleteShoppingCart();
     };

     useEffect(() => {
          fetch('products.json')
               .then(res => res.json())
               .then(data => setProducts(data))
     }, []);

     useEffect(() => {
          const storedCart = getShoppingCart();
          // console.log(storedCart);

          const savedCart = [];

          //step 1: get id of added product
          for (const id in storedCart) {

               //step 2: get the product from products by using id
               const addedProduct = products.find(product => product.id === id);

               //set 3: get quantity of the product
               if (addedProduct) {
                    const quantity = storedCart[id];
                    addedProduct.quantity = quantity;

                    //step 4: add the added product to the saved cart
                    savedCart.push(addedProduct);
               }
               // console.log(addedProduct);

               //step 5: set the cart
               setCart(savedCart)
          }
     }, [products])

     return (
          <div className='shop-container'>
               <div className='product-container'>
                    {
                         products.map(product => <Product
                              key={product.id}
                              product={product}
                              handleAddToCart={handleAddToCart}
                         ></Product>
                         )
                    }
               </div>
               <div className='cart-container'>
                    <Cart
                         handleClearCart={handleClearCart}
                         cart={cart}
                    >
                         <Link className='btn-link' to='/orders'>
                              <button className='btn-review-proceed'>
                                   <span>Review Order</span>
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                   </svg>

                              </button>
                         </Link>
                    </Cart>
               </div>
          </div>
     );
};

export default Shop;
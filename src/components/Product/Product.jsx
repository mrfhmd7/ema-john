import React from 'react';
import './Product.css';

const Product = (props) => {
     const {img, name, seller, ratings, price} = props.product;
     // console.log(props.product);
     return (
          <div className='product'>
               <img src={img} alt="" />
               <div className='product-info'>
                    <h6 className='product-name'>{name}</h6>
                    <p className='product-price'>Price: ${price}</p>
                    <p>Manufacturer: {seller}</p>
                    <p>Ratings: {ratings} stars</p>
               </div>
          </div>
     );
};

export default Product;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'
const Products = (props) => {
    
    const {img, name,seller,price,ratings} = props.product;
    // console.log(props)

    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className="product-info">
           <p className='product-name'>{name}</p>
           <p>Price: {price}</p>
           <p>Seller: {seller}</p>
           <p>Rating: {ratings}</p>
           </div>
           <div>
          
            <button onClick={()=>props.addToCart(props.product)} className='btn-cart'><p>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></p></button>
           </div>
        </div>
    );
};

export default Products;
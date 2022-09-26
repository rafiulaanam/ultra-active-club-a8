import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] =useState([])

    useEffect(() =>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])


    const addToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
{
    products.map(product=><Products
     key={product.id}
     product={product}
 addToCart ={addToCart}
     ></Products>)
}
            </div>
            <div className="cart-conainer">
<h2>This is Order Summury</h2>
<p>Selected Item : {cart.length}</p>
            </div>
        </div>
    );
}; 

export default Shop;
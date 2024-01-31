import React, { useContext, useState } from 'react'
import { faker } from '@faker-js/faker';
import SingleProduct from '../components/SingleProduct';
import {Cart} from '../Context';


faker.seed(100);
const Home = () => {
    const {cart} =useContext(Cart)
    const productsArray =[...Array(20)].map(()=>({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.url()
    }))
    const [product]=useState(productsArray)    
    console.log("addCard",cart)
  return (
    <div className='productContainer'>
        {product.map((prod =>(
            <SingleProduct prod={prod}/>
        )))}
    </div>
  )
}

export default Home
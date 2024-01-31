import React, { useContext, useEffect, useState } from 'react'
import SingleProduct from '../components/SingleProduct'
import { Cart } from '../Context'
const CartPage = () => {
 
    const [total,setTotal]=useState()
    const { cart, setCart } = useContext(Cart)

    
    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>acc + Number(curr.price),0));
    },[cart])

    return (
        <div>
            <span style={{ fontSize: 30 }} >My cart</span>
            <br />
            <span style={{ fontSize: 30 }} >Total :Rs{total}</span>
            <div className='productContainer' >
                {cart.length !==0?(

                    cart.map((prod) => (
                        <SingleProduct prod={prod} key={prod.id} cart={cart} setCart={setCart} />
                    ))
                ):(
                    <span>No item found </span>
                )
                }
            </div>
        </div>
    )
}

export default CartPage
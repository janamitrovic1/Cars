"use client"
import React from 'react'
import { Button } from '@headlessui/react'
import { ProductProps } from './product'
const Cartbutton = ({props}:ProductProps) => {

  const addToCart = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart`,{
        method:"POST",
        body:JSON.stringify({proizvod_id:props.id,kolicina:5}),
        credentials:"include",
    })
    console.log(await res.json());
    }
  return (
    <Button onClick={addToCart} className="" >Add to Cart</Button>
  )
}

export default Cartbutton
"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '@headlessui/react'
import { ProductProps } from './product'
import { ShoppingCart } from 'lucide-react'

const Cartbutton = ({props}:ProductProps) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [state, setState] = useState(false);
  const addToCart = async ()=>{
      if(!addedToCart){
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart`, {
          method:"POST",
          body:JSON.stringify({proizvod_id:props.id, kolicina:5}),
          credentials:"include",
        });
      }
      else{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/` + props.id, {
          method: "DELETE"
        });
      }
      setState(!state);
    }
    useEffect(() => {
      const run = async() => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/` + props.id);
        const {data} = await res.json();
        setAddedToCart(data);
      }
      run();
    }, [state])
  return (
    <Button onClick={addToCart} className="flex items-center justify-between">
       {addedToCart ? <ShoppingCart fill='black' className='size-8'/> : <ShoppingCart fill='none'className='size-8'/>}
    </Button>
  )
}

export default Cartbutton
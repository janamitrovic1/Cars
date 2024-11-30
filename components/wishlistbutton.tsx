"use client"
import React from 'react'
import { ProductProps } from './product'
import { Button } from '@headlessui/react'
import { Heart } from 'lucide-react'
const Wishlistbutton = ({props}:ProductProps) => {


    const addToWishList = async ()=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wishlist`,{
            method:"POST",
            body:JSON.stringify({proizvod_id:props.id}),
            credentials:"include",
        })
        console.log(await res.json());
        }
    
        
  return (
    <Button onClick={addToWishList} className="" ><Heart/>Add to WishList</Button>
  )
}

export default Wishlistbutton
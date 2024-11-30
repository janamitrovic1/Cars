"use client"
import React, { useEffect, useState } from 'react'
import { ProductProps } from './product'
import { Button } from '@headlessui/react'
import { Heart } from 'lucide-react'
const Wishlistbutton = ({props}:ProductProps) => {
  const [wishListed, setWishListed] = useState(false);
  const [state, setState] = useState(false);

  const addToWishList = async ()=>{
    if(!wishListed){
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wishlist`,{
        method:"POST",
        body:JSON.stringify({proizvod_id:props.id}),
        credentials:"include",
      });
    }
    else{
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wishlist/` + props.id, {
        method: "DELETE"
      });
    }
    // console.log(await res.json());
    setState(!state);
  }
  useEffect(() => {
    const run = async() => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wishlist/` + props.id);
      const {data} = await res.json();
      setWishListed(data);
    }
    run();
  }, [state])
  return (
    <Button onClick={addToWishList} className="">
      { wishListed ? <Heart  fill='red' stroke="none"className='size-8'/> : <Heart strokeWidth="2" className="size-8" />}
    </Button>
  )
}

export default Wishlistbutton
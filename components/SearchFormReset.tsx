"use client"
import React from 'react'
import {X} from 'lucide-react'
import Link from 'next/link'

const SearchFormReset = () => {
    
    const reset = ()=>{
        const form = document.querySelector(".search_form") as HTMLFormElement;
        if(form) form.reset()
    }

  return (
    <button onClick={reset}>
        <Link href="/" className='search-btn text-white-100' >
            <X className='size-5' />
        </Link>
    </button>
    );
}

export default SearchFormReset
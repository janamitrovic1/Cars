import Image from "next/image";
import Link from "next/link";
import { Button } from "@headlessui/react";
import { Proizvod } from "@prisma/client";

interface ProductProps {
    post: Proizvod
}

export default function Product ({ post } : ProductProps){

    const {id,model,slika,karoserija,marka,cena,godiste,description} = post;
    return (
        <>
            <li className='product-card group flex flex-col'>
                <div className="flex">
                    <p className='product-card_date'>
                        <Link href={`/?query=${karoserija}`}>
                            {karoserija}
                        </Link>
                    </p>
                </div>
                <div className='flex-between mt-5 gap-5'>
                    <div className='flex-1'>
                    { /*  <Link href={`/?query=${marka}`}>
                            <p className='text-16-medium line-clamp-1'>{marka}</p>
                        </Link> */ }
                        <Link href={`/products/${post.id}`}>
                            <h3 className='text-26-bold line-clamp-1'>{marka + ' ' + model}</h3>
                        </Link>
                        <h5 className="text-godiste line-clamp-1">{godiste}.</h5>
                    </div>
                    <div>
                        <p className="product-cena">{cena}$</p>
                    </div>
                </div>

                <p className='product-card_desc'>
                    <Link href={`/products/${post.id}`}>
                        {description && description?.length > 80 ? `${description?.substring(0, 80)}...` : description}
                        {description && description?.length > 80 && (<Link href={`/products/${id}`}><a className="read-more" style={{ color: 'blue', textDecoration: 'underline' }}>Read More</a></Link> )}
                    </Link>
                </p>
                    <Image src={slika} alt="placeholder" className='product-card_img' width={350} height={164} />
                <div className="flex-grow" />
                <div className='flex justify-end items-end gap-3 mt-5'>
                    <Button className='product-card_btn'>
                        <Link href={`/products/${id}`}>
                            Details
                        </Link>
                    </Button>
                </div>
            </li>
        </>
  )
}
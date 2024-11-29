import Image from "next/image";
import Link from "next/link";
import { EyeIcon } from "lucide-react";
import { Button } from "@headlessui/react";
import { Proizvod } from "@prisma/client";
    
export type ProductType = Proizvod;
export default function Product ({post}:{post: ProductType}){

    const {id,ime,model,slika,kategorija,marka,cena,godiste,description} = post;
  return (
    <li className='product-card group'>

        <div className='flex-between'>
            <p className='product-card_date'>
                {kategorija}
            </p>
            <div className='flex gap'>
                <EyeIcon className='size-6 text-secondary-300 group-hover:text-primary transition-all duration-500'/>
                <span className='text-16-medium'>0</span>
            </div>
        </div>
        

        <div className='flex-between mt-5 gap-5'>
            <div className='flex-1'>
                <Link href={`/?query=${marka}`}>
                    <p className='text-16-medium line-clamp-1'>{marka}</p>
                </Link>
                <Link href={`/api/product/${post.id}`}>
                    <h3 className='text-26-bold line-clamp-1'>{ime}</h3>
                </Link>
                <h5 className="text-godiste line-clamp-1">{godiste}.god</h5>
            </div>
            <div>
                <p className="product-cena">{cena}$</p>
            </div>
        </div>

        <Link href={`/api/product/${post.id}`}>
            <p className='product-card_desc'>{description}</p>
            
            <Image src={slika} alt="placeholder"  className='product-card_img' width={350} height={164}/>
        </Link>

        <div className='flex-between gap-3 mt-5'>
            <Link href={`/`}>
                <p className='text-16-medium'>Demo drive</p>
            </Link>
            <Button className='product-card_btn'>
                <Link href={`/api/product/${id}`}>
                    Details
                </Link>
            </Button>
        </div>
    </li>
  )
}

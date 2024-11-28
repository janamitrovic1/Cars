import Image from "next/image";
import Link from "next/link";
import { EyeIcon } from "lucide-react";
import { Button } from "@headlessui/react";
import { formatDate } from "@/lib/utils";

export default function Product ({post}:{post: ProductType}){

    const {_createdAt, views,marka,model,_id,image,description } = post;
  return (
    <li className='product-card group'>

        <div className='flex-between'>
            <p className='product-card_date'>
                {formatDate(_createdAt)}
            </p>
            <div className='flex gap'>
                <EyeIcon className='size-6 text-secondary-300 group-hover:text-primary transition-all duration-500'/>
                <span className='text-16-medium'>{views}</span>
            </div>
        </div>
        

        <div className='flex-between mt-5 gap-5'>
            <div className='flex-1'>
                {/* <Link href={`/user/${authorId}`}>
                    <p className='text-16-medium line-clamp-1'>{name}</p>
                </Link> */}
                <Link href={`/products/${post._id}`}>
                    <h3 className='text-26-semibold line-clamp-1'>{model}</h3>
                </Link>
            </div>
            <Link href={`/user/`}>
                <Image src="https://placehold.co/600x400" alt="placeholder" width={48} height={48} className="rounded-full"/>
            </Link>
        </div>

        <Link href={`/products/${post._id}`}>
            <p className='product-card_desc'>{description}</p>
            
            <Image src={image} alt="placeholder"  className='product-card_img'width={350} height={164}/>
        </Link>

        <div className='flex-between gap-3 mt-5'>
            <Link href={`/?query=${marka.toLowerCase()}`}>
                <p className='text-16-medium'>{marka}</p>
            </Link>
            <Button className='product-card_btn' asChild>
                <Link href={`/products/${_id}`}>
                    Details
                </Link>
            </Button>
        </div>
    </li>
  )
}

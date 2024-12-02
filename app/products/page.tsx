import React from 'react'
import { Proizvod } from '@prisma/client';
import SearchForm from '@/components/searchform';
import Product from '@/components/product';


const Page = async ({searchParams}:{
  searchParams:Promise<{query?:string}>
}) => {
  const query = (await searchParams).query;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product?page=1&pagesize=100`, {
        credentials: "include",
        cache: "no-store", // Opcija da podaci budu sveži za svaki request
      });
    const { data: posts }: { data: Proizvod[] } = await res.json();

  return (
    <div>
        <section className="orange_container !min-h-[300px]">
            <SearchForm page={true} query={query}/>
        </section>
        <section className="section_container">
            <p className="text-30-semibold">
                {query ? `Search results for ${query}`:`All cars`}
            </p>
            <ul className="mt-7 card_grid">
            {posts?.length > 0 ? (
                posts.map((post: Proizvod) => (
                    <Product props={post} page={false} key={post?.id}/>
                ))
            ) : (
                <p className="no-results">No cars found</p>
            )}
            </ul>
        </section>
        </div>
  )
}

export default Page
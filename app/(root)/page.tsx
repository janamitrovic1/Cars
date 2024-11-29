'use client'

import Product from "@/components/product";
import SearchForm from "@/components/searchform";
import { Proizvod } from "@prisma/client";
import { useEffect, useState } from "react";

export default function Home({/*searchParams*/}:{
    searchParams:Promise<{query?:string}>
}) {
    const [posts, setPosts] = useState<Proizvod[]>([]);

    useEffect(() => {
        const run = async() => {
            const res = await fetch("/api/product?page=1&pagesize=10", {
                credentials: 'include'
            });
            const posts = (await res.json()).data;
            setPosts(posts);
        }
        run();
    }, [])


    return (
        <div>
            <section className="orange_container">
                <h1 className="heading mx-auto">Find Your Perfect Ride Here Where Style and QUality meet.</h1>
                <p className="sub-heading !max-w-3xl">Stop your long and tough search and find car for your needs.</p>
                <SearchForm query={""}/>
            </section>
            <section className="section_container">
                <p className="text-30-semibold">
                    {/* { query ? Search results for "${query}":All cars} */}
                    Search results for
                </p>
                <ul className="mt-7 card_grid">
                {posts?.length > 0 ? (
                    posts.map((post: Proizvod) => (
                        <Product post={post} key={post?.id}/>
                    ))
                ) : (
                    <p className="no-results">No cars found</p>
                )}
                </ul>
            </section>
        </div>
    );
}
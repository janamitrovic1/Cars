import Product from "@/components/product";
import SearchForm from "@/components/searchform";
import { Proizvod } from "@prisma/client";

export default async function Home({searchParams}:{
    searchParams:Promise<{query?:string}>
}) {
    const query = (await searchParams).query;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product?page=1&pagesize=10`, {
        credentials: "include",
        cache: "no-store", // Opcija da podaci budu sveži za svaki request
      });
      const { data: posts }: { data: Proizvod[] } = await res.json();


    return (
        <div>
            <section className="orange_container">
                <h1 className="heading mx-auto">Find Your Perfect Ride Here Where Style and QUality meet.</h1>
                <p className="sub-heading !max-w-3xl">Stop your long and tough search and find car for your needs.</p>
                <SearchForm query={query}/>
            </section>
            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Search results for ${query}`:`All cars`}
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
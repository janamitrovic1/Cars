import Product from "@/components/product";
import SearchForm from "@/components/searchform";
import { Proizvod } from "@prisma/client";
import Link from "next/link";
import Button2 from "@/components/button2";
import Nav from "@/components/nav";
import HeroSection from "@/components/herosection";
import './Style.css'

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product?page=1&pagesize=6`,
    {
      credentials: "include",
      cache: "no-store", // To keep the data fresh for each request
    }
  );
  const { data: posts }: { data: Proizvod[] } = await res.json();

  return (
    <div>
      <div
        className="min-h-screen bg-[#49243E ] text-[#DBAFA0]"
        style={{
          background:
            "radial-gradient(ellipse at center, #BB8493 0%, #49243E 60%)",
        }}
      >
        <HeroSection />
      </div>

      <section className="section_container flex flex-col items-center">
        <p className="text-30-semibold sm:!self-start">
          {query ? `Search results for ${query}` : `All cars`}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: Proizvod) => (
              <Product props={post} key={post?.id} />
            ))
          ) : (
            <p className="no-results">No cars found</p>
          )}
        </ul>
        <Link href="/products" className="button-yellow">
          View All
        </Link>
      </section>
    </div>
  );
}

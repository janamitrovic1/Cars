
import Product from "@/components/product";
import SearchForm from "@/components/searchform";

export default async function Home({searchParams}:{
	searchParams:Promise<{query?:string}>
}) {
	const query = (await searchParams).query;
    const posts = [
		{
			_createdAt: new Date(),
			views:55,
			_id:1,
			image: "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3FDB8MHxwaG90by1wYWdlfHx8GVufDB8fHx8fA%3D%3D",
			description: "This is a description",
			marka:"BMW",
			model:"We Robots",
		}
	];
	return (
        <div>
            <section className="orange_container">
                <h1 className="heading mx-auto">Find Your Perfect Ride Here Where Style and QUality meet.</h1>
                <p className="sub-heading !max-w-3xl">Stop your long and tough search and find car for your needs.</p>
                <SearchForm query={query}/>
            </section>
            <section className="section_container">
                <p className="text-30-semibold">
                    { query ? `Search results for "${query}"`:`All cars`}
                </p>
                <ul className="mt-7 card_grid">
                {posts?.length > 0 ? (
                    posts.map((post: ProductType,number) => (
                    <Product  key={post?._id} post={post}/>
                    ))
                ) : (
                    <p className="no-results">No cars found</p>
                )}
                </ul>
            </section>
        </div>
    );
}

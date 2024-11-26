
import Product from "@/components/product";
import SearchForm from "@/components/searchform";

export default async function Home({searchParams}:{
	searchParams:Promise<{query?:string}>
}) {
	const query = (await searchParams).query;

	return (
        <div>
            <section className="orange_container">
                <h1 className="heading mx-auto">Find car especially for your needs</h1>
                <p className="sub-heading !max-w-3xl">Stop your long and tough search and find car for your needs.</p>
                <SearchForm query={query}/>
            </section>
            <Product />
        </div>
    );
}

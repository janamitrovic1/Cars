
import Product from "@/components/product";


export default function Home() {
  return (
    <div>
      <section className="orange_container">
        <h1 className="heading mx-auto">Find car especially for your needs</h1>
        <p className="sub-heading !max-w-3xl">Stop your long and tough search and find car for your needs.</p>
      </section>
      <Product />
    </div>
  );
}

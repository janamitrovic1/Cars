import Image from "next/image";
import {Nav} from "@/components/nav"

import Product from "@/components/product";


export default function Home() {
  return (
    <div>
      <section id="hero">
        <div>
          
        </div>
        <div>
          <h1 className="text-center text-lg text-red-700">FIND CAR FOR YOUR NEEDS.</h1>
        </div>
        <Product />
      </section>
    </div>
  );
}

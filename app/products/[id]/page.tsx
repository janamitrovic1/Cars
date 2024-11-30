import { prisma } from "@/prisma/prisma";
import { notFound } from "next/navigation";
import React from "react";
// import Link from "next/link";
import ProductDetailsTable from "@/components/productdetailstable";

const Page = async ({ params }: { params: { id: string } }) => {
  try {
    
    const product = await prisma.proizvod.findUnique({
      where: { id: params.id },
    });

    if (!product) {
      return notFound();
    }

    const {id,model,slika,marka,cena,godiste,description} = product;
    
    return (
      <>
        <section className="orange_container !min-h-[230px]">
          <p className="tag">{godiste + ". god"}</p>
          <h1 className="heading">{marka+" "+model}</h1>
          <p className="sub-heading !max-w-5xl">{description}</p>
        </section>

        <section className="section_container">
          <img src={slika} alt="thumbnail" className="w-9/12 mx-auto h-auto rounded-xl"></img>

          <div className="space-y-5 mt-10 max-w-4xl mx-auto">
            <div className="flex-between gap-5">
              <p className="text-30-bold">Details About Vehicle</p>
              <p className="cena-tag">{cena +" $"}</p>
            </div>
            <ProductDetailsTable props={product}></ProductDetailsTable>
          </div>
        </section>
      </> 
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <div>
        <h1>Error</h1>
        <p>Unable to load the product details. Please try again later.</p>
      </div>
    );
  }
};

export default Page;

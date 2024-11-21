import { prisma } from "@/prisma/prisma";

export async function GET(){
    try {
        const products = await prisma.proizvod.findMany();
        if(!products)
            return Response.json({ msg: 'No products found' }, { status: 404 });
        return Response.json({ data: products }, { status: 200 });
    } catch (error) {
        return Response.json({ err: error }, { status: 500 });
    }
}
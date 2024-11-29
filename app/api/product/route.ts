import { prisma } from "@/prisma/prisma";

export async function GET(req: Request){
    try {
        const url = new URL(req.url);
        const searchParams = new URLSearchParams(url.search);
        const page = parseInt(searchParams.get('page') || '');
        const pageSize = parseInt(searchParams.get('pagesize') || '');
        const products = await prisma.proizvod.findMany({
            skip: (page - 1) * pageSize,
            take: pageSize
        });
        if(!products)
            return Response.json({ msg: 'No products found' }, { status: 404 });
        return Response.json({ data: products }, { status: 200 });
    } catch (error) {
        console.log(error);
        return Response.json({ err: error }, { status: 500 });
    }
}
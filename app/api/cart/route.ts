import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/prisma/prisma";

export async function GET() {
    try {
        const session : any = await getServerSession(authOptions);
        const products = await prisma.korpa.findMany({
            include: {
                proizvod: {}
            },
            where: {
                korisnik_id: session?.user?.id
            }
        });
        if(!products)
            return Response.json({ msg: 'No products found!' }, { status: 404 });
        return Response.json({ data: products }, { status: 200 });
    } catch (error) {
        return Response.json({ err: error }, { status: 500 });
    }  
}

export async function POST(req: Request){
    try {
        const session : any = await getServerSession(authOptions);
        const data = await req.json();
        console.log(data)
        const product = await prisma.korpa.create({
            data: {
                korisnik_id: session.user.id,
                proizvod_id: data.proizvod_id,
                kolicina: data.kolicina
            }
        });
        return Response.json({ data: product }, { status: 201 })
    } catch (error) {
        console.log(error);
        return Response.json({ err: error }, { status: 500 });
    }
}
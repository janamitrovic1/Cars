import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from "@/prisma/prisma";

export async function DELETE(req: Request, { params } : any) {
    try {
        const { id } = await params;
        const session : any = await getServerSession(authOptions);
        const product = await prisma.listaZelja.delete({
            where: {
                korisnik_id_proizvod_id: {
                    korisnik_id: session.user.id,
                    proizvod_id: id
                }
            }
        });
        if(!product)
            return Response.json({ msg: 'Product not found!' }, { status: 404 });
        return Response.json({ data: product }, { status: 200 });
    } catch (error) {
        console.log(error);
        return Response.json({ err: error }, { status: 500 });
    }
}
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from "@/prisma/prisma";

export async function GET() {
    try {
        const session : any = await getServerSession(authOptions);
        const count = await prisma.listaZelja.count({
            where: {
                korisnik_id: session.user.id
            }
        });
        return Response.json({ data: count }, { status: 200 });
    } catch (error) {
        return Response.json({ err: error }, { status: 500 });
    }
}
import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get('cartToken')?.value;
        const userId = 1;

        if (!token) {
            return NextResponse.json({totalAmount: 0, items: []})
        }

        const userCart = await prisma.cart.findFirst({
           where: {
               OR: [
                   {
                       token,
                   },
                   {
                       userId,
                   }
               ]
           },
            include: {
               items: {
                   orderBy: {
                       createdAt: 'desc'
                   },
                   include: {
                       productItem: {
                           include: {
                               product: true
                           }
                       },
                       ingredients: true
                   }
               }
            }
        });


        return NextResponse.json(userCart)
    } catch (e) {
        console.error(e);
    }
}
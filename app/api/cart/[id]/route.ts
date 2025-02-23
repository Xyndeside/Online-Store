import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
	try {
		//TODO: по возможности сделать поиск по userID
		const id = Number(params.id);
		const data = (await req.json()) as { quantity: number };
		const token = req.cookies.get('cartToken')?.value;

		if (!token) {
			return NextResponse.json({ error: 'Cart token not found' });
		}

		const cartItem = await prisma.cartItem.findFirst({
			where: {
				id,
			},
		});

		if (!cartItem) {
			return NextResponse.json({ error: 'Cart not found' });
		}

		await prisma.cartItem.update({
			where: {
				id,
			},
			data: {
				quantity: data.quantity,
			},
		});
	} catch (e) {
		console.error('[CART_PATCH] Server Error', e);
		return NextResponse.json({ message: 'Не удалось обновить корзину' }, { status: 500 });
	}
}

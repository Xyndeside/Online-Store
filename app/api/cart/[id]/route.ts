import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';
import { updateCartTotalPrice } from '@/shared/lib/update-cart-total-price';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
	try {
		//TODO: по возможности сделать поиск по userID
		const { id } = await params;
		const numericId = Number(id);
		const data = (await req.json()) as { quantity: number };
		const token = req.cookies.get('cartToken')?.value;

		if (!token) {
			return NextResponse.json({ error: 'Cart token not found' });
		}

		const cartItem = await prisma.cartItem.findFirst({
			where: {
				id: numericId,
			},
		});

		if (!cartItem) {
			return NextResponse.json({ error: 'Cart not found' });
		}

		await prisma.cartItem.update({
			where: {
				id: numericId,
			},
			data: {
				quantity: data.quantity,
			},
		});

		const updatedUserCart = await updateCartTotalPrice(token);

		return NextResponse.json(updatedUserCart);
	} catch (e) {
		console.error('[CART_PATCH] Server Error', e);
		return NextResponse.json({ message: 'Не удалось обновить корзину' }, { status: 500 });
	}
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
	try {
		const { id } = await params;
		const numericId = Number(id);
		const token = req.cookies.get('cartToken')?.value;

		if (!token) {
			return NextResponse.json({ error: 'Cart token not found' });
		}

		const cartItem = await prisma.cartItem.findFirst({
			where: {
				id: numericId,
			},
		});

		if (!cartItem) {
			return NextResponse.json({ error: 'Cart not found' });
		}

		await prisma.cartItem.delete({
			where: {
				id: numericId,
			},
		});

		const updatedUserCart = await updateCartTotalPrice(token);

		return NextResponse.json(updatedUserCart);
	} catch (e) {
		console.error('[CART_DELETE] Server Error', e);
		return NextResponse.json({ message: 'Не удалось удалить корзину' }, { status: 500 });
	}
}

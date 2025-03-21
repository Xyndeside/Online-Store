'use client';

import { FC } from 'react';
import { useCartStore } from '@/shared/store';
import toast from 'react-hot-toast';
import { ProductWithRelations } from '@/@types/prisma';
import { ChoosePizzaForm, ChooseProductForm } from '@/shared/components/shared';

interface Props {
	product: ProductWithRelations;
	onSubmit?: VoidFunction;
}

export const ProductForm: FC<Props> = ({ product, onSubmit: _onSubmit }: Props) => {
	const addCartItem = useCartStore((state) => state.addCartItem);
	const loading = useCartStore((state) => state.loading);

	const firstItem = product.items[0];
	const isPizzaForm: boolean = Boolean(firstItem.pizzaType);

	const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
		try {
			const itemId = productItemId ?? firstItem.id;

			addCartItem({
				productItemId: itemId,
				ingredients,
			});

			toast.success('Товар успешно добавлен в корзину');

			_onSubmit?.();
		} catch (e) {
			toast.error('Не удалось добавить товар в корзину');
			console.error(e);
		}
	};

	return isPizzaForm ? (
		<ChoosePizzaForm
			imageUrl={product.imageUrl}
			name={product.name}
			ingredients={product.ingredients}
			items={product.items}
			onSubmitAction={onSubmit}
			loading={loading}
		/>
	) : (
		<ChooseProductForm
			imageUrl={product.imageUrl}
			name={product.name}
			price={firstItem.price}
			onSubmit={onSubmit}
			loading={loading}
		/>
	);
};

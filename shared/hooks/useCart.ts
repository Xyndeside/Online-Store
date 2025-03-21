import { useEffect } from 'react';
import { useCartStore } from '@/shared/store';
import { CreateCartItemValues } from '@/shared/services/dto/cart.dto';
import { CartStateItem } from '@/shared/lib/get-cart-details';

type ReturnProps = {
	totalAmount: number;
	items: CartStateItem[];
	loading: boolean;
	updateItemQuantity: (id: number, quantity: number) => void;
	removeCartItem: (id: number) => void;
	addCartItem: (values: CreateCartItemValues) => void;
	onClickCountButton: (id: number, quantity: number, type: 'plus' | 'minus') => void;
};

export const useCart = (): ReturnProps => {
	const cartState = useCartStore((state) => state);

	useEffect(() => {
		cartState.fetchCartItems();
	}, []);

	const onClickCountButton = async (id: number, quantity: number, type: 'plus' | 'minus') => {
		if (type === 'plus') {
			await cartState.updateItemQuantity(id, ++quantity);
		} else {
			await cartState.updateItemQuantity(id, --quantity);
		}
	};

	return {
		...cartState,
		onClickCountButton,
	};
};

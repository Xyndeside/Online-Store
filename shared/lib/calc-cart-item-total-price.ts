import { CartItemDTO } from '@/shared/services/dto/cart.dto';

export const calcCartItemTotalPrice = (item: CartItemDTO): number => {
	const quantity = item.quantity;
	const priceForOne = item.productItem.price;
	const ingredientsPrice = item.ingredients.reduce(
		(acc, ingredient) => acc + ingredient.price,
		0,
	);

	return (ingredientsPrice + priceForOne) * quantity;
};
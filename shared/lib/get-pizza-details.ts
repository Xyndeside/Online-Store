import { calcPizzaPrice } from '@/shared/lib/calc-pizza-price';
import { mapPizzaType, PizzaSize, PizzaType } from '@/shared/constants/pizza';
import { Ingredient, ProductItem } from '.prisma/client';

export const getPizzaDetails = (
	type: PizzaType,
	size: PizzaSize,
	items: ProductItem[],
	ingredients: Ingredient[],
	selectedIngredients: Set<number>,
) => {
	const totalPrice = calcPizzaPrice(type, size, items, ingredients, selectedIngredients);
	const textDetails = `${size} см, ${mapPizzaType[type].toLowerCase()} тесто`;

	return { totalPrice, textDetails };
};

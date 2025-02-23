import { Ingredient, ProductItem } from '.prisma/client';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';

/**
 * Функция для вычисления общей стоимости пиццы
 * @param type - тип теста пиццы
 * @param size - размер пиццы
 * @param items - массив вариаций конкретной пиццы
 * @param ingredients - массив доступных ингредиентов для конкретной пиццы
 * @param selectedIngredients - массив выбранных ингредиентов у конкретной пиццы
 * @returns - возвращает подсчитанную стоимость типа number
 */
export const calcPizzaPrice = (
	type: PizzaType,
	size: PizzaSize,
	items: ProductItem[],
	ingredients: Ingredient[],
	selectedIngredients: Set<number>
) => {
	const pizzaPrice =
		items.find((item: ProductItem) => item.pizzaType === type && item.size === size)?.price ||
		0;
	const totalIngredientsPrice = ingredients
		.filter((ingredient: Ingredient) => selectedIngredients.has(ingredient.id))
		.reduce((acc: number, ingredient: Ingredient) => acc + ingredient.price, 0);

	return pizzaPrice + totalIngredientsPrice;
};

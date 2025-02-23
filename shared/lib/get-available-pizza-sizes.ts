import { ProductItem } from '.prisma/client';
import { pizzaSizes, PizzaType } from '@/shared/constants/pizza';
import { Variant } from '@/shared/components/shared/GroupVariants';

export const getAvailablePizzaSizes = (
	type: PizzaType,
	items: ProductItem[],
): Variant[] => {
	const filteredPizzasByType: ProductItem[] = items.filter(
		(item: ProductItem) => item.pizzaType === type,
	);

	return pizzaSizes.map((size) => ({
		name: size.name,
		value: size.value,
		disabled: !filteredPizzasByType.some((pizza) => Number(pizza.size) === Number(size.value)),
	}));
};

import { useEffect, useState } from 'react';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';
import { useSet } from 'react-use';
import {ProductItem} from ".prisma/client";
import {getAvailablePizzaSizes} from "@/shared/lib";
import {Variant} from "@/shared/components/shared/GroupVariants";

interface ReturnProps {
	size: PizzaSize;
	type: PizzaType;
	selectedIngredients: Set<number>;
	availableSizes: Variant[];
	currentItemId?: number;
	setSize: (size: PizzaSize) => void;
	setType: (type: PizzaType) => void;
	addIngredient: (id: number) => void;
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
	const [size, setSize] = useState<PizzaSize>(20);
	const [type, setType] = useState<PizzaType>(1);

	const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<number>([]));

	const availableSizes = getAvailablePizzaSizes(type, items);

	const currentItemId = items.find((item) => item.pizzaType === type && item.size === size)?.id;

	useEffect(() => {
		const currentSize = availableSizes?.find(
			(item) => Number(item.value) === size && !item.disabled,
		);
		const firstNotDisabledSize = availableSizes?.find((item) => !item.disabled);

		if (!currentSize && firstNotDisabledSize) {
			setSize(Number(firstNotDisabledSize.value) as PizzaSize);
		}
	}, [type]);

	return {
		size,
		type,
		selectedIngredients,
		availableSizes,
		currentItemId,
		setSize,
		setType,
		addIngredient,
	};
};

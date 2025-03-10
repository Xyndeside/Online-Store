'use client';

import { FC } from 'react';
import { cn } from '@/shared/lib/utils';
import { GroupVariants, IngredientItem, PizzaImage, Title } from '@/shared/components/shared';
import { Button } from '@/shared/components/ui';
import { RussianRuble, ShoppingCartIcon } from 'lucide-react';
import { PizzaSize, PizzaType, pizzaTypes } from '@/shared/constants/pizza';
import { Ingredient, ProductItem } from '.prisma/client';
import { getPizzaDetails } from '@/shared/lib';
import { usePizzaOptions } from '@/shared/hooks';

interface Props {
	imageUrl: string;
	name: string;
	ingredients: Ingredient[];
	items: ProductItem[];
	onClickAddCart?: VoidFunction;
	className?: string;
}

export const ChoosePizzaForm: FC<Props> = ({
	name,
	items,
	imageUrl,
	ingredients,
	onClickAddCart,
	className,
}: Props) => {
	const { size, type, selectedIngredients, availableSizes, setSize, setType, addIngredient } =
		usePizzaOptions(items);

	const { totalPrice, textDetails } = getPizzaDetails(
		type,
		size,
		items,
		ingredients,
		selectedIngredients,
	);

	const handleClickAdd = () => {
		onClickAddCart?.();
	};

	return (
		<div className={cn('flex flex-1', className)}>
			<PizzaImage imageUrl={imageUrl} size={size} />

			<div className="flex flex-col justify-between w-[490px] bg-[#f7f6f5] p-7">
				<div>
					<Title text={name} size={'md'} className="font-extrabold mb-1" />

					<p className="text-gray-400 mb-5">{textDetails}</p>

					<div className="flex flex-col gap-5 mb-5">
						<GroupVariants
							items={availableSizes}
							value={String(size)}
							onClick={(value) => setSize(Number(value) as PizzaSize)}
						/>

						<GroupVariants
							items={pizzaTypes}
							value={String(type)}
							onClick={(value) => setType(Number(value) as PizzaType)}
						/>
					</div>

					<div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar">
						<div className="grid grid-cols-3 gap-3">
							{ingredients.map((ingredient) => (
								<IngredientItem
									key={ingredient.id}
									imageUrl={ingredient.imageUrl}
									name={ingredient.name}
									price={ingredient.price}
									onClick={() => addIngredient(ingredient.id)}
									active={selectedIngredients.has(ingredient.id)}
								/>
							))}
						</div>
					</div>
				</div>

				<Button
					onClick={handleClickAdd}
					className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
				>
					<ShoppingCartIcon className="mr-3" /> {totalPrice} <RussianRuble size={18} />
				</Button>
			</div>
		</div>
	);
};

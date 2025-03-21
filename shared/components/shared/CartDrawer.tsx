'use client';

import React, { FC, PropsWithChildren } from 'react';

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/shared/components/ui/sheet';
import Link from 'next/link';
import { Button } from '@/shared/components/ui';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CartDrawerItem } from '@/shared/components/shared';
import { getCartItemDetails } from '@/shared/lib';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';
import Image from 'next/image';
import { useCart } from '@/shared/hooks';

interface Props {
	children: React.ReactNode;
}

export const CartDrawer: FC<PropsWithChildren<Props>> = ({ children }: Props) => {
	const { items, totalAmount, removeCartItem, onClickCountButton } = useCart();

	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent className="flex flex-col justify-center pb-0 bg-[#F4F1EE]">
				<SheetHeader>
					{totalAmount > 0 && (
						<SheetTitle>
							Количество товаров в корзине:{' '}
							<span className="font-bold">{items.length}</span>
						</SheetTitle>
					)}
				</SheetHeader>

				{!totalAmount && (
					<div className="flex flex-col items-center justify-center w-72 mx-auto">
						<Image
							alt="Empty cart"
							src="/assets/empty-box.png"
							width={120}
							height={120}
						/>
						<SheetTitle>Корзина пуста</SheetTitle>
						<p className="text-center text-neutral-500 mb-5">
							Добавьте как минимум один товар, чтобы увидеть свою корзину
						</p>
						<SheetClose asChild>
							<Button className="w-56 h-12 text-base" size="lg">
								<ArrowLeft className="w-5 mr-2" />
								Вернуться назад
							</Button>
						</SheetClose>
					</div>
				)}

				{totalAmount > 0 && (
					<>
						<div className="-mx-6 mt-5 overflow-auto flex-1">
							<div className="mb-2">
								{items.map((item) => (
									<CartDrawerItem
										key={item.id}
										id={item.id}
										details={getCartItemDetails(
											item.ingredients,
											item.pizzaType as PizzaType,
											item.pizzaSize as PizzaSize,
										)}
										disabled={item.disabled}
										imageUrl={item.imageUrl}
										name={item.name}
										price={item.price}
										quantity={item.quantity}
										onClickCountButton={(type) =>
											onClickCountButton(item.id, item.quantity, type)
										}
										onClickDeleteCartButton={() => removeCartItem(item.id)}
										className="mb-2"
									/>
								))}
							</div>
						</div>

						<SheetFooter className="-mx-6 bg-white p-8">
							<div className="w-full">
								<div className="flex mb-4">
									<span className="flex flex-1 text-lg text-neutral-500">
										Итого
										<div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
									</span>

									<span className="font-bold text-lg">{totalAmount} Р</span>
								</div>

								<Link href="/checkout">
									<Button type="submit" className="w-full h-12 text-base">
										Оформить заказ
										<ArrowRight className="w-5 ml-2" />
									</Button>
								</Link>
							</div>
						</SheetFooter>
					</>
				)}
			</SheetContent>
		</Sheet>
	);
};

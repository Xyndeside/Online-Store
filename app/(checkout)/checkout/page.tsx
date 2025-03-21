'use client';

import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import {
	Title,
	CheckoutCart,
	CheckoutSidebar,
	CheckoutAddressForm,
} from '@/shared/components/shared';
import { useCart } from '@/shared/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutFormSchema, CheckoutFormValues } from '@/shared/constants';
import { CheckoutPersonalForm } from '@/shared/components/shared';

export default function CheckoutPage() {
	const { items, totalAmount, removeCartItem, onClickCountButton, loading } = useCart();

	const form = useForm<CheckoutFormValues>({
		resolver: zodResolver(checkoutFormSchema),
		defaultValues: {
			email: '',
			firstName: '',
			lastName: '',
			phone: '',
			address: '',
			comment: '',
		},
	});

	const onSubmit: SubmitHandler<CheckoutFormValues> = (data) => {
		console.log(data);
	};

	return (
		<div className="mt-10">
			<Title text="Оформление заказа" size="lg" className="font-extrabold mt-8" />

			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="flex justify-between gap-10 mt-10">
						{/* Левая часть */}
						<div className="flex flex-col gap-10 flex-1 mb-20">
							<CheckoutCart
								items={items}
								onClickCountButton={onClickCountButton}
								removeCartItem={removeCartItem}
								loading={loading}
							/>

							<CheckoutPersonalForm />

							<CheckoutAddressForm />
						</div>

						{/* Правая часть */}
						<div className="w-[450px]">
							<CheckoutSidebar
								totalAmount={totalAmount}
								loading={loading}
								hasItems={items.length > 0}
							/>
						</div>
					</div>
				</form>
			</FormProvider>
		</div>
	);
}

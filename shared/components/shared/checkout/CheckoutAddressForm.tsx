import { FC } from 'react';
import { FormTextarea, WhiteBlock, AddressInput } from '@/shared/components/shared';

interface Props {
	className?: string;
}

export const CheckoutAddressForm: FC<Props> = ({ className }: Props) => {
	return (
		<WhiteBlock title="3. Адрес доставки" className={className}>
			<div className="flex flex-col gap-5">
				<AddressInput />

				<FormTextarea
					name="comment"
					className="text-base"
					placeholder="Комментарий к заказу"
					rows={5}
				/>
			</div>
		</WhiteBlock>
	);
};

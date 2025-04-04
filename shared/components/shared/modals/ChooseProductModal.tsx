'use client';

import { FC } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/shared/components/ui/dialog';
import { cn } from '@/shared/lib/utils';
import { useRouter } from 'next/navigation';
import { ProductForm } from '@/shared/components/shared';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { ProductWithRelations } from '@/@types/prisma';

interface Props {
	product: ProductWithRelations;
	className?: string;
}

export const ChooseProductModal: FC<Props> = ({ product, className }: Props) => {
	const router = useRouter();

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
					className,
				)}
			>
				<VisuallyHidden>
					{' '}
					<DialogTitle />{' '}
				</VisuallyHidden>
				<ProductForm product={product} onSubmit={() => router.back()} />
			</DialogContent>
		</Dialog>
	);
};

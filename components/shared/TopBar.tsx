import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/shared/container';
import { Categories } from '@/components/shared/Categories';
import { SortPopup } from '@/components/shared/SortPopup';
import { Category } from '.prisma/client';
import { categories } from '@/prisma/constants';

interface Props {
	categories: Category[];
	className?: string;
}

export const TopBar: FC<Props> = ({ categories, className }: Props) => {
	return (
		<div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
			<Container className="flex items-center justify-between">
				<Categories items={categories} />

				<SortPopup />
			</Container>
		</div>
	);
};

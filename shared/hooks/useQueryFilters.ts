import { useDebounce } from 'react-use';
import qs from 'qs';
import { Filters } from '@/shared/hooks/useFilters';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

export const useQueryFilters = (filters: Filters) => {
	const router = useRouter();

	const params = useMemo(() => {
		return {
			...filters.prices,
			pizzaTypes: Array.from(filters.pizzaTypes),
			sizes: Array.from(filters.sizes),
			ingredients: Array.from(filters.selectedIngredients),
		};
	}, [filters.prices, filters.pizzaTypes, filters.sizes, filters.selectedIngredients]);

	/*
        When changing filters, add the result to the URL
    */
	useDebounce(
		() => {
			const query: string = qs.stringify(params, { arrayFormat: 'comma' });

			if (window.location.search !== `?${query}`) {
				router.push(`?${query}`, { scroll: false });
			}
		},
		500,
		[params],
	);
};

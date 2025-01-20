import { useEffect, useState } from 'react';
import { Ingredient } from '.prisma/client';
import { API } from '@/services/api-client';

export const useIngredients = () => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchIngredients() {
			try {
				setLoading(true);
				const ingredients = await API.ingredients.getAll();
				setIngredients(ingredients);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		}

		fetchIngredients();
	}, []);

	return { ingredients, loading };
};

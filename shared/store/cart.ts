import { create } from 'zustand';
import { API } from '@/shared/services/api-client';
import { getCartDetails } from '@/shared/lib';
import { CartStateItem } from '@/shared/lib/get-cart-details';
import { CreateCartItemValues } from '@/shared/services/dto/cart.dto';

export interface CartState {
	loading: boolean;
	error: boolean;
	totalAmount: number;
	items: CartStateItem[];

	fetchCartItems: () => Promise<void>;
	updateItemQuantity: (id: number, quantity: number) => Promise<void>;
	addCartItem: (values: CreateCartItemValues) => Promise<void>;
	removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
	items: [],
	error: false,
	loading: true,
	totalAmount: 0,

	/*
        Запрос на получение актуальной информации по корзине
        И сохранение этой информации в поля глобального состояния
    */
	fetchCartItems: async () => {
		try {
			set({ loading: true, error: false });
			const data = await API.cart.getCart();
			const { items, totalAmount } = getCartDetails(data);
			set({ items, totalAmount });
		} catch (error) {
			console.error(error);
			set({ error: true });
		} finally {
			set({ loading: false });
		}
	},

	/* Запрос на удаление корзины */
	removeCartItem: async (id: number) => {
		try {
			set((state) => ({
				loading: true,
				error: false,
				items: state.items.map((item) =>
					item.id === id ? { ...item, disabled: true } : item,
				),
			}));
			const data = await API.cart.removeCartItem(id);
			const { items, totalAmount } = getCartDetails(data);
			set({ items, totalAmount });
		} catch (error) {
			console.error(error);
			set({ error: true });
		} finally {
			set((state) => ({
				loading: false,
				items: state.items.map((item) => ({ ...item, disabled: false })),
			}));
		}
	},

	/* Запрос на обновление кол-ва товара в корзине */
	updateItemQuantity: async (id: number, quantity: number) => {
		try {
			set({ loading: true, error: false });
			const data = await API.cart.updateItemQuantity(id, quantity);
			const { items, totalAmount } = getCartDetails(data);
			set({ items, totalAmount });
		} catch (error) {
			console.error(error);
			set({ error: true });
		} finally {
			set({ loading: false });
		}
	},

	/* Запрос на добавление в корзину */
	addCartItem: async (values: CreateCartItemValues) => {
		try {
			set({ loading: true, error: false });
			const data = await API.cart.addCartItem(values);
			const { items, totalAmount } = getCartDetails(data);
			set({ items, totalAmount });
		} catch (error) {
			console.error(error);
			set({ error: true });
		} finally {
			set({ loading: false });
		}
	},
}));

import { axiosInstance } from '@/shared/services/instance';
import { APIRoutes } from '@/shared/services/constants';
import {CartDTO, CreateCartItemValues} from '@/shared/services/dto/cart.dto';

export const getCart = async (): Promise<CartDTO> => {
	const { data } = await axiosInstance.get<CartDTO>(APIRoutes.CART);

	return data;
};

export const updateItemQuantity = async (id: number, quantity: number): Promise<CartDTO> => {
	const { data } = await axiosInstance.patch<CartDTO>(`${APIRoutes.CART}/${id}`, { quantity });

	return data;
};

export const removeCartItem = async (id: number): Promise<CartDTO> => {
	const { data } = await axiosInstance.delete<CartDTO>(`${APIRoutes.CART}/${id}`);

	return data;
}

export const addCartItem = async (values: CreateCartItemValues): Promise<CartDTO> => {
	const { data } = await axiosInstance.post<CartDTO>(`${APIRoutes.CART}`, values);

	return data;
}

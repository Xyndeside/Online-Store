import { axiosInstance } from '@/shared/services/instance';
import { APIRoutes } from '@/shared/services/constants';
import {CartDTO} from "@/shared/services/dto/cart.dto";

export const fetchCart = async (): Promise<CartDTO> => {
	const { data } = await axiosInstance.get<CartDTO>(APIRoutes.CART);

	return data;
};

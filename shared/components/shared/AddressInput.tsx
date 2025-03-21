'use client';

import React, { useId } from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
	onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
	const API_KEY = String(process.env.DADATA_API_KEY);
	const id = useId();

	return (
		<AddressSuggestions
			token={API_KEY}
			uid={id}
			onChange={(data) => onChange?.(data?.value)}
		/>
	);
};

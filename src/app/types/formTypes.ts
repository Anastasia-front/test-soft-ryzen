import type { UseFormRegisterReturn } from "react-hook-form";

export interface FormFields {
	fullName: string;
	email: string;
	position: string;
	phone: string;
	message: string;
	consent: boolean;
}

interface Field {
	type: string;
	name: string;
	label?: string;
	inputMode?:
		| "text"
		| "email"
		| "tel"
		| "search"
		| "none"
		| "url"
		| "numeric"
		| "decimal"
		| undefined;
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
	register: () => UseFormRegisterReturn<keyof FormFields>;
	options?: string[];
	text?: string;
	defaultValue?: string;
}

export type FormFieldsData = {
	[key: string]: Field;
};

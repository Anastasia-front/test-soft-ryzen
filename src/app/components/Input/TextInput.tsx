import { forwardRef } from "react";
import type { FieldErrors, FieldValues } from "react-hook-form";

import { isObjectEmpty } from "../../../../helpers/isObjectEmpty";
import { InputWrapper } from "./InputWrapper/InputWrapper";

export type TextInputElement = HTMLInputElement;
export interface TextInputProps
	extends ReactHTMLElementAttributes<TextInputElement> {
	label?: string;
	register?: FieldValues;
	errors?: FieldErrors<FieldValues>;
	required?: boolean;
	disabled?: boolean;
}

export const TextInput = forwardRef<TextInputElement, TextInputProps>(
	(
		{
			label,
			required,
			disabled,
			register,
			errors,
			placeholder,
			className,
			...rest
		},
		ref
	) => {
		const error = errors ? errors[register?.name]?.message?.toString() : "";
		const errorMessages: Record<string, string> = {
			fullName:
				"Incorrect full name, it must contain name and surname only in Latin",
			email: "Incorrect email, it must follow suit only in Latin",
			position: "Incorrect position, it must has only Latin characters",
			phone: "Incorrect phone, it must have min 10 numbers and start from zero",
		};

		// const errorMessages: Record<string, string> = {
		// 	fullName: "Incorrect full name",
		// 	email: "Incorrect email",
		// 	position: "Incorrect position",
		// 	phone: "Incorrect phone",
		// };

		const errorWithPattern =
			errors &&
			!isObjectEmpty(errors) &&
			register?.name &&
			errors[register.name]
				? (errorMessages[register.name] as keyof typeof errorMessages) ||
				  "Unknown error"
				: "";

		const inputStyles = [
			"max-w-[86vw]",
			"h-[24px]",
			"min-w-[280px]",
			"md:max-w-[222px]",
			"md:min-w-[222px]",
			"xl:h-[28px]",
			"xl:min-w-[290px]",
			"bg-input",
			"py-[6px]",
			"px-[8px]",
			"font-200",
			"text-20",
			"leading-[24px]",
			"placeholder:text-light2",
			"hover:bg-light1",
			error ? "placeholder:text-red text-red" : "",
		].join(" ");

		return (
			<label
				className={
					error ? "placeholder:text-red text-red " + className : className
				}
			>
				<InputWrapper
					label={label}
					error={errorWithPattern}
					required={required}
					disabled={disabled}
					showError={!!errors}
				>
					<input
						type="text"
						className={inputStyles}
						placeholder={placeholder}
						ref={ref}
						{...register}
						{...rest}
					/>
				</InputWrapper>
			</label>
		);
	}
);

TextInput.displayName = "TextInput";

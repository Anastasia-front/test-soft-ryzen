import { forwardRef } from "react";

import type { FieldErrors, FieldValues } from "react-hook-form";

import { InputWrapper } from "./InputWrapper";

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
			className = "",
			inputMode,
			...rest
		},
		ref
	) => {
		const error = errors ? errors[register?.name]?.message?.toString() : "";

		const inputStyles = [
			"h-[28px]",
			"w-[280px]",
			"md:w-[222px]",
			"xl:h-[28px]",
			"xl:w-[290px]",
			"bg-input",
			"py-[6px]",
			"px-[8px]",
			"font-200",
			"text-20",
			"leading-[24px]",
			"hover:bg-light1",
			error
				? "placeholder:text-red text-red"
				: "placeholder:text-light2 text-white",
		].join(" ");

		return (
			<label
				className={
					error ? "placeholder:text-red text-red " + className : className
				}
			>
				<InputWrapper
					label={label}
					error={error}
					required={required}
					disabled={disabled}
					showError={!!errors}
				>
					<input
						type="text"
						inputMode={inputMode}
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

import { forwardRef } from "react";
import type { FieldErrors, FieldValues } from "react-hook-form";

import clsx from "clsx";
import { InputWrapper } from "../Input/InputWrapper/InputWrapper";

export type TextareaElement = HTMLTextAreaElement;

export interface TextareaProps
	extends ReactHTMLElementAttributes<TextareaElement> {
	label?: string;
	register?: FieldValues;
	errors?: FieldErrors<FieldValues>;
	required?: boolean;
	disabled?: boolean;
}

export const Textarea = forwardRef<TextareaElement, TextareaProps>(
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
		const componentClass = [
			error && "border-red",
			disabled && "border-backgroundInput",
		];

		return (
			<label className={className}>
				<InputWrapper
					label={label}
					error={error}
					required={required}
					disabled={disabled}
					className={clsx(componentClass)}
					showError={!!errors}
				>
					<textarea
						className="w-[93vw] h-[196px] min-w-[280px] md:min-w-[222px] md:h-[228px] xl:h-[292px] xl:min-w-[268px] bg-input py-[6px] pl-[8px] font-200 text-20 leading-[24px] placeholder:text-light2 hover:bg-light1"
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

Textarea.displayName = "Textarea";

import { forwardRef } from "react";
import type { FieldErrors, FieldValues } from "react-hook-form";

import clsx from "clsx";

import type { InputWrapperCommonProps } from "../InputWrapper/InputWrapper";
import { InputWrapper } from "../InputWrapper/InputWrapper";

import s from "./Checkbox.module.scss";

export type CheckboxElement = HTMLInputElement;

export interface CheckboxProps
	extends ReactHTMLElementAttributes<CheckboxElement>,
		InputWrapperCommonProps {
	text: string;
	register?: FieldValues;
	errors?: FieldErrors<FieldValues>;
}

export const Checkbox = forwardRef<CheckboxElement, CheckboxProps>(
	(
		{ label, text, required, disabled, register, errors, className, ...rest },
		ref
	) => {
		const error = errors ? errors[register?.name]?.message?.toString() : "";
		const componentClass = [
			error && "border-red",
			disabled && "border-backgroundInput",
			className,
		];

		return (
			<InputWrapper
				label={label}
				error={error}
				required={required}
				disabled={disabled}
				className={clsx(componentClass)}
				showError={!!errors}
			>
				<div className="flex items-center min-w-[259px] md:min-w-[222px] md:w-[222px] xl:w-[290px]">
					<label className="flex items-start gap-[8px] cursor-pointer">
						<input
							type="checkbox"
							value={text}
							className={s.input}
							ref={ref}
							{...register}
							{...rest}
						/>
						<p className="text-12 font-200 text-cap leading-[20px] ">{text}</p>
					</label>
				</div>
			</InputWrapper>
		);
	}
);

Checkbox.displayName = "Checkbox";

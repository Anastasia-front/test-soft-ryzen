import type { FieldErrors, FieldValues } from "react-hook-form";

import type { InputWrapperCommonProps } from "../InputWrapper";
import { InputWrapper } from "../InputWrapper";

import s from "./Checkbox.module.scss";

export type CheckboxElement = HTMLInputElement;

export interface CheckboxProps
	extends ReactHTMLElementAttributes<CheckboxElement>,
		InputWrapperCommonProps {
	text: string;
	register?: FieldValues;
	errors?: FieldErrors<FieldValues>;
}

export function Checkbox(
	{
		label,
		text,
		required,
		disabled,
		register,
		errors,
		className = "",
		...rest
	}: CheckboxProps,
	ref: React.ForwardedRef<HTMLInputElement>
) {
	const error = errors ? errors[register?.name]?.message?.toString() : "";

	return (
		<InputWrapper
			label={label}
			error={error}
			required={required}
			disabled={disabled}
			showError={!!errors}
		>
			<div
				className="flex items-center absolute bottom-[-30px] left-[-140px]
			md:left-[-236px] xl:bottom-[-15px] xl:left-[-300px] w-[259px] md:w-[222px] xl:w-[290px]"
			>
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

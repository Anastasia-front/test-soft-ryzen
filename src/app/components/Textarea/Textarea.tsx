import type { FieldErrors, FieldValues } from "react-hook-form";

import { InputWrapper } from "../Input/InputWrapper";

export type TextareaElement = HTMLTextAreaElement;

export interface TextareaProps
	extends ReactHTMLElementAttributes<TextareaElement> {
	section: "career" | "contacts";
	label?: string;
	register?: FieldValues;
	errors?: FieldErrors<FieldValues>;
	required?: boolean;
	disabled?: boolean;
}

export function Textarea(
	{
		section,
		label,
		required,
		disabled,
		register,
		errors,
		placeholder,
		className = "",
		inputMode,
		...rest
	}: TextareaProps,
	ref: React.ForwardedRef<TextareaElement>
) {
	const error = errors ? errors[register?.name]?.message?.toString() : "";

	const sectionStyles =
		section === "contacts"
			? ["md:mt-[-136px]", "md:ml-[242px]", "xl:mt-0", "xl:ml-0"]
			: ["md:ml-[250px]", "md:mt-[-272px]", "xl:ml-[314px]", "xl:mt-[-320px]"];

	const sizeInSections =
		section === "contacts"
			? ["md:h-[222px]", "xl:h-[174px]", "md:w-[463px]", "xl:w-[607px]"]
			: ["md:h-[228px]", "xl:h-[268px]", "md:w-[222px]", "xl:w-[292px]"];

	const textareaStyles = [
		...sizeInSections,

		"h-[196px]",
		"w-[280px]",
		"bg-input",
		"py-[6px]",
		"px-[8px]",
		"font-200",
		"text-20",
		"leading-[24px]",
		"placeholder:text-light2",
		"hover:bg-light1",
	].join(" ");

	return (
		<label className={className}>
			<InputWrapper
				className={sectionStyles.join(" ")}
				label={label}
				error={error}
				required={required}
				disabled={disabled}
				showError={!!errors}
			>
				<textarea
					inputMode={inputMode}
					className={textareaStyles}
					placeholder={placeholder}
					ref={ref}
					{...register}
					{...rest}
				/>
			</InputWrapper>
		</label>
	);
}

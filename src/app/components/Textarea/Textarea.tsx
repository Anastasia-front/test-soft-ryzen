import type { FieldErrors, FieldValues } from "react-hook-form";

import { InputWrapper } from "../Input/InputWrapper/InputWrapper";

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
		className,
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
			? [
					"md:min-w-[60vw]",
					"l:min-w-[70vw]",
					"md:h-[222px]",
					"xl:h-[174px]",
					"xl:min-w-[607px]",
			  ]
			: [
					"md:max-w-[400px]",
					"md:min-w-[222px]",
					"md:h-[228px]",
					"xl:h-[268px]",
					"xl:min-w-[292px]",
			  ];

	const textareaStyles = [
		...sizeInSections,
		"xl:min-w-[292px]",
		"max-w-[86vw]",
		"h-[196px]",
		"min-w-[280px]",
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

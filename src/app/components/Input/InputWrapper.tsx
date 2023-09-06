import { forwardRef } from "react";

import Image from "next/image";

import clsx from "clsx";

type InputWrapperElement = HTMLDivElement;

export interface InputWrapperCommonProps {
	label?: string;
	required?: boolean;
	disabled?: boolean;
	showError?: boolean;
}

interface InputWrapperProps
	extends ReactHTMLElementAttributes<InputWrapperElement>,
		InputWrapperCommonProps {
	error?: string;
}

const NON_BREAKING_SPACE = "\xA0";

export const InputWrapper = forwardRef<InputWrapperElement, InputWrapperProps>(
	(
		{
			label,
			required,
			disabled,
			error,
			className = "",
			showError,
			children,
			...rest
		},
		ref
	) => {
		const labelString =
			label && label?.trim().length > 0 ? label : NON_BREAKING_SPACE;

		const labelStyles = [
			"text-12",
			"font-200",
			"text-cap",
			"text-justify",
			"leading-[24px]",
			"tracking-[2.4px]",
			error ? "placeholder:text-red text-red" : "",
		].join(" ");

		return (
			<div
				className={clsx("flex flex-col gap-[12px] md:gap-[4px]", className)}
				ref={ref}
				{...rest}
			>
				{label && <p className={labelStyles}>{labelString}</p>}
				<div className="relative">
					{children}
					{showError && (
						<div className="flex gap-[4px] items-center justify-end absolute top-[30px] right-0">
							{error && (
								<Image
									src="/svg/cross.svg"
									alt="cross"
									width={18}
									height={18}
									className=""
								/>
							)}
							<p
								className=" text-red text-12 font-200
								text-cap leading-[24px] tracking-[2.4px]"
							>
								{error}
							</p>
						</div>
					)}
				</div>
			</div>
		);
	}
);

InputWrapper.displayName = "InputWrapper";

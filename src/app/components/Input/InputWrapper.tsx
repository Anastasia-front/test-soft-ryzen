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
			className,
			showError,
			children,
			...rest
		},
		ref
	) => {
		const labelString =
			label && label?.trim().length > 0 ? label : NON_BREAKING_SPACE;

		const labelStyles = [
			"md:w-[30vw]",
			"xl:w-[20vw]",
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
				className={clsx(
					"flex flex-col gap-[12px] md:gap-[4px] md:w-[30vw] xl:w-[20vw]",
					className
				)}
				ref={ref}
				{...rest}
			>
				{label && (
					<div className={labelStyles}>
						<p>{labelString}</p>
					</div>
				)}
				<div className="flex flex-col">
					{children}
					{showError && (
						<div className="flex gap-[4px] items-center justify-end text-right">
							{error && (
								<Image
									src="/svg/cross.svg"
									alt="cross"
									width={18}
									height={18}
								/>
							)}
							<p
								className="text-red text-12 font-200 text-cap text-justify
					 leading-[24px] tracking-[2.4px] w-[86vw] min-w-[280px] md:min-w-[222px] xl:min-w-[268px]"
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

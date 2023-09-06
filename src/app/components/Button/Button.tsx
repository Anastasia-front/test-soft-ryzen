import { forwardRef } from "react";

import clsx from "clsx";

type ButtonElement = HTMLElementTagNameMap["button"];
interface ButtonProps extends React.HTMLAttributes<ButtonElement> {
	disabled?: boolean;
	type?: "submit" | "button";
	section?: "services" | "header" | "modal";
	submit?: boolean;
	className?: string;
}

export const Button = forwardRef<ButtonElement, ButtonProps>(
	(
		{
			type = "button",
			submit,
			disabled,
			section,
			children,
			className = "",
			...rest
		},
		ref
	) => {
		const componentClass = [
			"uppercase",
			type === "submit" && "text-30 font-500 self-right xl:text-32",
			type === "button" && !section && "text-33 font-100",
			section === "services" &&
				"text-20 flex gap-[8px] items-center justify-start text-left",
			disabled && "text-light2 hover:shadow-none",
		];

		return (
			<button
				type={submit ? "submit" : "button"}
				className={clsx(className, componentClass)}
				disabled={disabled}
				ref={ref}
				{...rest}
			>
				{children}
			</button>
		);
	}
);

Button.displayName = "Button";

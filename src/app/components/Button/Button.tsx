import { forwardRef } from "react";

import clsx from "clsx";

type ButtonElement = HTMLElementTagNameMap["button"];
interface ButtonProps extends React.HTMLAttributes<ButtonElement> {
	disabled?: boolean;
	type?: "submit" | "button";
	submit?: boolean;
}

export const Button = forwardRef<ButtonElement, ButtonProps>(
	(
		{ type = "button", submit, disabled, children, className, ...rest },
		ref
	) => {
		const componentClass = [
			type === "submit" && "text-30 font-500 self-right xl:text-32",
			type === "button" && "text-33 font-100",
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

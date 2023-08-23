"use client";

import Image from "next/image";
import { forwardRef, useEffect, useState } from "react";

type ButtonElement = HTMLElementTagNameMap["button"];
type ButtonProps = React.HTMLAttributes<ButtonElement>;

export const ButtonArrowUp = forwardRef<ButtonElement, ButtonProps>(
	({ className, ...rest }, ref) => {
		const [showButton, setShowButton] = useState(false);

		const handleScrollUp = () => {
			setShowButton(window.scrollY > document.documentElement.clientHeight);
		};

		useEffect(() => {
			const handleScroll = () => {
				const getHelpSection = document.getElementById("about");
				if (getHelpSection) {
					const sectionRect = getHelpSection.getBoundingClientRect();
					const windowHeight = window.innerHeight;

					if (sectionRect.top <= windowHeight) {
						handleScrollUp();
					}
				}
			};
			window.addEventListener("scroll", handleScroll);

			return () => {
				window.removeEventListener("scroll", handleScroll);
			};
		}, []);

		return (
			<button
				className={` ${className} ${
					showButton ? "" : "hidden"
				} bg-light1 p-[10px] `}
				onClick={() => {
					document.documentElement.scrollIntoView({ block: "start" });
				}}
				ref={ref}
				{...rest}
			>
				<Image src="/svg/arrow-up.svg" alt="arrow up" width={30} height={30} />
			</button>
		);
	}
);

ButtonArrowUp.displayName = "ButtonArrowUp";

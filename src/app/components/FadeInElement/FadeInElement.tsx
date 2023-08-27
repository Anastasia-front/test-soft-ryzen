"use client";

import React, { useState } from "react";

interface FadeInElementProps {
	isVisible?: boolean;
	children: React.ReactNode;
}

export function FadeInElement({
	isVisible = true,
	children,
}: FadeInElementProps) {
	const [isVisibleState, setIsVisibleState] = useState<boolean>(isVisible);
	const [_, setHasClicked] = useState<boolean>(false);

	const toggleVisibility = () => {
		setIsVisibleState(!isVisibleState);
		setHasClicked(true);

		setTimeout(() => {
			setIsVisibleState(isVisible);
			setHasClicked(false);
		}, 500);
	};

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const target = event.target as HTMLDivElement;
		if (target.tagName.toLowerCase() !== "button") {
			return;
		}

		toggleVisibility();
	};

	return (
		<div
			className={`transition-opacity duration-700 ease-in-out ${
				isVisibleState ? "opacity-1" : "opacity-0"
			}`}
			onClick={handleClick}
		>
			{children}
		</div>
	);
}

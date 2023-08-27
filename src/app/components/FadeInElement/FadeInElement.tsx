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
	const [hasClicked, setHasClicked] = useState<boolean>(false);

	const toggleVisibility = () => {
		setIsVisibleState(!isVisibleState);
		setHasClicked(true);

		setTimeout(() => {
			setIsVisibleState(isVisible);
			setHasClicked(false);
		}, 300);
	};

	return (
		<div
			className={`transition-opacity duration-300 ease-in-out ${
				isVisibleState ? "opacity-1" : "opacity-0 "
			}`}
			onClick={!hasClicked ? toggleVisibility : undefined}
		>
			{children}
		</div>
	);
}

"use client";

import { useScreenQuery } from "@/app/hooks/useScreenQuery";

import { Desktop } from "./screens/Desktop";
import { Mobile } from "./screens/Mobile";
import { Tablet } from "./screens/Tablet";

export interface SlideProps {
	number: number;
	handleActivityClick: () => React.ReactNode | null;
}

export function Slide({ number, handleActivityClick }: SlideProps) {
	const { isScreenTabletSm, isScreenTabletXl } = useScreenQuery();
	return isScreenTabletXl ? (
		<Desktop number={number} handleActivityClick={handleActivityClick} />
	) : isScreenTabletSm ? (
		<Tablet number={number} handleActivityClick={handleActivityClick} />
	) : (
		<Mobile number={number} handleActivityClick={handleActivityClick} />
	);
}

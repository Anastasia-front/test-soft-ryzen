"use client";

import { useScreenQuery } from "@/app/hooks/useScreenQuery";
import { DesktopServices } from "./DesktopServices";
import { MobileServices } from "./MobileServices";
import { TabletServices } from "./TabletServices";

export interface SlideProps {
	number: number;
	handleActivityClick: () => React.ReactNode | null;
}

export function Slide({ number, handleActivityClick }: SlideProps) {
	const { isScreenTabletSm, isScreenTabletXl } = useScreenQuery();
	return isScreenTabletXl ? (
		<DesktopServices
			number={number}
			handleActivityClick={handleActivityClick}
		/>
	) : isScreenTabletSm ? (
		<TabletServices number={number} handleActivityClick={handleActivityClick} />
	) : (
		<MobileServices number={number} handleActivityClick={handleActivityClick} />
	);
}

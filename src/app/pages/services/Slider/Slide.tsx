"use client";

import { useScreenQuery } from "@/app/hooks/useScreenQuery";

import { Desktop } from "./screens/Desktop";
import { Mobile } from "./screens/Mobile";
import { Tablet } from "./screens/Tablet";

export function Slide({ number }: { number: number }) {
	const { isScreenTabletSm, isScreenTabletXl } = useScreenQuery();
	return isScreenTabletXl ? (
		<Desktop number={number} />
	) : isScreenTabletSm ? (
		<Tablet number={number} />
	) : (
		<Mobile number={number} />
	);
}

"use client";

import { useScreenQuery } from "@/app/hooks/useScreenQuery";

import { Mobile } from "./screens/Mobile";
import { TabletAndDesktop } from "./screens/TabletAndDesktop/TabletAndDesktop";

export function Slider() {
	const { isScreenTabletSm } = useScreenQuery();
	return isScreenTabletSm ? <TabletAndDesktop /> : <Mobile />;
}

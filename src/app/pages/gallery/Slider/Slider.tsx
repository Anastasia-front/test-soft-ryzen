"use client";

import { useScreenQuery } from "@/app/hooks/useScreenQuery";

import { MobileGallery } from "./MobileGallery";
import { TabletAndDesktopGallery } from "./TabletAndDesktopGallery/TabletAndDesktopGallery";

export function Slider() {
	const { isScreenTabletSm } = useScreenQuery();
	return isScreenTabletSm ? <TabletAndDesktopGallery /> : <MobileGallery />;
}

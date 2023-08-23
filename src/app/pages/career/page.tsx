"use client";

import { useScreenQuery } from "@/app/hooks/useScreenQuery";

import { Section } from "@/app/components/Section/Section";
import { MobileCareer } from "./MobileCareer";
import { TabletAndDesktopCareer } from "./TabletAndDesktopCareer";

import s from "./styles.module.scss";

export default function Career() {
	const { isScreenTabletSm } = useScreenQuery();

	return (
		<Section className={s.bg} id="career">
			{!isScreenTabletSm ? <MobileCareer /> : <TabletAndDesktopCareer />}
		</Section>
	);
}

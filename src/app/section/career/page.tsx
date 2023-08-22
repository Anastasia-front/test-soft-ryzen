"use client";

import Section from "@/app/components/Section/Section";
import { useScreenQuery } from "@/app/hooks/useScreenQuery";
import MobileCareer from "./MobileCareer";
import TabletAndDesktopCareer from "./TabletAndDesktopCareer";
import s from "./styles.module.scss";

export default function Career() {
	const { isScreenTabletSm } = useScreenQuery();

	return (
		<Section className={s.bg} id="career">
			{!isScreenTabletSm ? <MobileCareer /> : <TabletAndDesktopCareer />}
		</Section>
	);
}

"use client";

import { useScreenQuery } from "@/app/hooks/useScreenQuery";

import { Section } from "@/app/components/Section/Section";
import { Mobile } from "./screens/Mobile";
import { TabletAndDesktop } from "./screens/TabletAndDesktop";

import s from "./styles.module.scss";

export default function Career() {
	const { isScreenTabletSm } = useScreenQuery();

	return (
		<Section className={s.bg} id="career">
			{!isScreenTabletSm ? <Mobile /> : <TabletAndDesktop />}
		</Section>
	);
}

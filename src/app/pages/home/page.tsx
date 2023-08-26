"use client";

import { Section } from "@/app/components/Section/Section";

import { useScreenQuery } from "@/app/hooks/useScreenQuery";

import { Mobile } from "./screens/Mobile";
import { TabletAndDesktop } from "./screens/TabletAndDesktop";

import s from "./styles.module.scss";

export default function Home(props: { className: string }) {
	const { isScreenTabletSm } = useScreenQuery();
	return (
		<Section className={`${s.bg} ${props.className}`}>
			{isScreenTabletSm ? <TabletAndDesktop /> : <Mobile />}
		</Section>
	);
}

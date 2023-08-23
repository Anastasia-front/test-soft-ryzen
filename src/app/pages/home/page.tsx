"use client";

import { useScreenQuery } from "@/app/hooks/useScreenQuery";

import { Section } from "@/app/components/Section/Section";
import { MobileHome } from "./MobileHome";
import { TabletAndDesktopHome } from "./TabletAndDesktopHome";

import s from "./styles.module.scss";

export default function Home(props: { className: string }) {
	const { isScreenTabletSm } = useScreenQuery();
	return (
		<Section className={`${s.bg} ${props.className}`}>
			{isScreenTabletSm ? <TabletAndDesktopHome /> : <MobileHome />}
		</Section>
	);
}

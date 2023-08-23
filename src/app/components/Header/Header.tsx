"use client";

import { useScreenQuery } from "@/app/hooks/useScreenQuery";
import Image from "next/image";
import { BurgerMenu } from "./BurgerMenu";
import { Navigation } from "./Navigation";

export function Header(props: { className: string }) {
	const { isScreenTabletSm } = useScreenQuery();

	return (
		<header
			className={`w-[100vw] z-30 flex justify-between items-center px-[20px] pt-[36px] md:px-[32px] md:pt-[25px] xl:px-[24px] xl:pt-[48px] ${props.className}`}
		>
			<Image src="/Logo1.png" alt="logo" width={61} height={33} />
			{isScreenTabletSm ? <Navigation /> : <BurgerMenu />}
		</header>
	);
}

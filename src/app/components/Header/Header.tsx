"use client";

import Image from "next/image";

import { useState } from "react";

import { useScreenQuery } from "@/app/hooks/useScreenQuery";

import { Navigation } from "@/app/pages/Navigation";

import { BurgerMenu } from "./BurgerMenu";

export function Header(props: { className: string }) {
	const { isScreenTabletSm } = useScreenQuery();

	const [_, setOpen] = useState(false);

	const onCloseMenu = () => {
		setOpen(false);
	};

	return (
		<header
			className={`w-[100vw] z-30 flex justify-between items-center px-[20px] pt-[36px] md:px-[32px] md:pt-[25px] xl:px-[24px] xl:pt-[48px] ${props.className}`}
		>
			<Image src="/Logo1.png" alt="logo" width={61} height={33} />
			{isScreenTabletSm ? (
				<Navigation onCloseMenu={onCloseMenu} />
			) : (
				<BurgerMenu />
			)}
		</header>
	);
}

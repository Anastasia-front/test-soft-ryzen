"use client";

import Image from "next/image";

import { Link } from "react-scroll";

import { useText } from "@/app/context/TextDataContext";

import { useScreenQuery } from "@/app/hooks/useScreenQuery";

export function ButtonJoinNow() {
	const textData = useText();

	const button = textData.home.button;

	const { isScreenTabletSm, isScreenTabletXl } = useScreenQuery();

	const offset = isScreenTabletXl ? 80 : isScreenTabletSm ? 60 : 10;

	const imageWidthClass = isScreenTabletXl ? 44 : isScreenTabletSm ? 35 : 42;
	const imageHeightClass = isScreenTabletXl ? 71 : isScreenTabletSm ? 50 : 53;

	const imageSize = isScreenTabletXl
		? "desktop"
		: isScreenTabletSm
		? "tablet"
		: "mobile";

	return (
		<Link
			id="buttonJoinUs"
			activeClass="active"
			href="/"
			to="contacts"
			spy={true}
			smooth={true}
			offset={offset}
			duration={500}
			className={`
			uppercase font-700 text-18 leading-[48px] py-[16px] px-[64px]  h-[53px] flex items-center
			justify-center bg-light1 relative hover:bg-light2
        ${isScreenTabletXl ? " text-32 h-[71px]" : ""}
        ${isScreenTabletSm ? " text-18" : ""}
      `}
		>
			<Image
				src={`/svg/buttonJoinNow/${imageSize}-left.svg`}
				alt="desktop left part of border"
				width={imageWidthClass}
				height={imageHeightClass}
				className="absolute top-0 left-0"
			/>
			{button}
			<Image
				src={`/svg/buttonJoinNow/${imageSize}-right.svg`}
				alt="desktop right part of border"
				width={imageWidthClass}
				height={imageHeightClass}
				className="absolute top-0 right-0"
			/>
		</Link>
	);
}

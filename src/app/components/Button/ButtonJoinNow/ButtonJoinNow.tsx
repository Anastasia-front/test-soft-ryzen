"use client";

import { useScreenQuery } from "@/app/hooks/useScreenQuery";
import Image from "next/image";
import Link from "next/link";

export function ButtonJoinNow() {
	const { isScreenTabletSm, isScreenTabletXl } = useScreenQuery();

	const imageWidthClass = isScreenTabletXl ? 44 : isScreenTabletSm ? 35 : 42;
	const imageHeightClass = isScreenTabletXl ? 71 : isScreenTabletSm ? 50 : 53;

	const imageSize = isScreenTabletXl
		? "desktop"
		: isScreenTabletSm
		? "tablet"
		: "mobile";

	return (
		<Link
			href="#contacts"
			className={`
			uppercase font-700 text-18 leading-[48px] py-[16px] px-[64px]  h-[53px] flex items-center justify-center bg-light1 relative
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
			join now
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

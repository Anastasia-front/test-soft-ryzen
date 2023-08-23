"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { useScreenQuery } from "@/app/hooks/useScreenQuery";

import Image from "next/image";
import photo1 from "../../../../../public/assets/content/slider/1-2x.jpg";
import photo2 from "../../../../../public/assets/content/slider/2-2x.jpg";
import photo3 from "../../../../../public/assets/content/slider/3-2x.jpg";

const photos = [photo1, photo2, photo3];

export function TabletAndDesktopGallery() {
	const { isScreenTabletSm } = useScreenQuery();

	const currentImageWidth = isScreenTabletSm ? "415" : "606";

	const currentImageHeight = isScreenTabletSm ? "294" : "492";

	const smallImageWidth = isScreenTabletSm ? "120" : "312";

	const smallImageHeight = isScreenTabletSm ? "86" : "225";

	const [ref] = useKeenSlider<HTMLDivElement>({
		slides: {
			perView: 2,
			spacing: 15,
		},
	});
	return (
		<div ref={ref} className="keen-slider">
			{photos.map((p, index) => (
				<Image
					src={p}
					alt={`photo${index}`}
					className="keen-slider__slide"
					width={currentImageWidth}
					height={currentImageHeight}
				/>
			))}
		</div>
	);
}

"use client";

import Image from "next/image";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { images } from "../data/images";

export function Mobile() {
	const [ref] = useKeenSlider<HTMLDivElement>({
		loop: true,
		slides: {
			origin: "center",
			perView: 3,
			spacing: 24,
		},
		vertical: true,
	});
	return (
		<div
			ref={ref}
			className="keen-slider flex justify-center cursor-grab"
			style={{ height: 650, width: "100%" }}
		>
			<ul className="h-full">
				{images.map((image) => (
					<li key={image.id} className="h-[199px]">
						<Image
							src={image.src}
							alt={image.alt}
							className="keen-slider__slide "
							width={280}
							height={187}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}

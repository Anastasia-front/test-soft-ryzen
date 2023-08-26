"use client";

import { Section } from "@/app/components/Section/Section";

import { useText } from "@/app/context/TextDataContext";

import { Slider } from "./Slider/Slider";

import s from "./styles.module.scss";

export function Gallery() {
	const textData = useText();

	const text = textData.gallery;

	return (
		<Section
			className={`${s.bg} flex flex-col gap-[24px] items-center`}
			id="gallery"
		>
			<h2
				className="text-40 md:text-67 xl:text-98 font-100 leading-[40px] md:leading-[81px] xl:leading-normal
		    tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px] uppercase xl:self-start"
			>
				{text.title.thinText}{" "}
				<span className="font-500">{text.title.boldText}</span>
			</h2>
			<Slider />
		</Section>
	);
}

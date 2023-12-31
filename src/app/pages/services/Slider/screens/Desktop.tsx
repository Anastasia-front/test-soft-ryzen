import Image from "next/image";

import { Section } from "@/app/components/Section/Section";

import { useText } from "@/app/context/TextDataContext";

import { images } from "../data/images";

import s from "../Slider.module.scss";

export function Desktop({ number }: { number: number }) {
	const textData = useText();

	const text = textData.services;

	const src = images[number];

	return (
		<Section className={s.bgOverlay} id="services">
			<div className="flex flex-col w-full">
				<div className="flex gap-[162px] text-98 ">
					<h2 className="font-100 uppercase leading-normal tracking-[-3.92px] items-start">
						{text.content[number].titlePartThin}
						<span className="font-500">
							{text.content[number].titlePartTBold}
						</span>
					</h2>
					<p className=" self-right font-100">
						{text.content[number].currentNumber}
						<span className="text-light2">
							{text.content[number].amountOfSlides}
						</span>
					</p>
				</div>
				<div className="flex gap-[240px]">
					<Image
						src={src}
						alt={text.content[number].subtitle}
						width={607}
						height={429}
						className=" max-w-[607px] h-auto"
					/>
					<div className="flex flex-col items-start justify-between">
						<p className="self-right text-12 font-200 leading-[24px] tracking-[2.4px] sm:text-14">
							{text.content[number].subtitle}
						</p>
						<h6 className="text-18 font-200 leading-[24px] max-w-[293px] text-justify self-end">
							{text.content[number].description}
						</h6>
					</div>
				</div>
			</div>
		</Section>
	);
}

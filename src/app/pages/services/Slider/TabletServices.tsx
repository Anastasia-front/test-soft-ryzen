import Image from "next/image";

import { Section } from "@/app/components/Section/Section";

import { useText } from "@/app/context/TextDataContext";

import { images } from "./data/images";

import { SlideProps } from "./Slide";

import s from "./Slider.module.scss";

export function TabletServices({ number, handleActivityClick }: SlideProps) {
	const textData = useText();

	const text = textData.services;

	const src = images[number];

	return (
		<Section className={s.bgOverlay} id="services">
			<div className="flex flex-col  gap-[24px] w-full">
				<div className="flex justify-between text-67 ">
					<h2 className="font-100 uppercase leading-normal tracking-[-2.68px] items-start">
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
				<div className="flex gap-[20px]">
					<Image
						src={src}
						alt={text.content[number].subtitle}
						width={463}
						height={370}
						className="h-auto min-w-[463px]"
					/>
					<div className="flex flex-col items-start text.content-between gap-[20px] justify-between">
						<div className="flex flex-col gap-[25px]">
							<ul className="flex flex-col gap-[16px] items-left uppercase text-22 text-light2 leading-[18px] max-w-[185px]">
								{handleActivityClick()}
							</ul>
							<p className="self-right text-12 font-200 leading-[24px] tracking-[2.4px] sm:text-14">
								{text.content[number].subtitle}
							</p>
						</div>

						<h6 className="text-13 font-200 leading-[20px] max-w-[700px]">
							{text.content[number].description}
						</h6>
					</div>
				</div>
			</div>
		</Section>
	);
}

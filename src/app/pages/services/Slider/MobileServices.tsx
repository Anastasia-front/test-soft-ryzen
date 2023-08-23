import Image from "next/image";

import { Section } from "@/app/components/Section/Section";

import { content } from "./data/content";
import { images } from "./data/images";

import { SlideProps } from "./Slide";

import s from "./Slider.module.scss";

export function MobileServices({ number, handleActivityClick }: SlideProps) {
	const src = images[number];

	return (
		<Section className={s.bgOverlay} id="services">
			<div className="min-h-[739px] flex flex-col justify-between items-center gap-[50px]">
				<div className="flex flex-col gap-[24px] w-full">
					<h1 className="text-40 font-100 uppercase leading-[56px] tracking-[-1.6px] items-start">
						{content[number].titlePartThin}
						<span className="font-500">{content[number].titlePartTBold}</span>
					</h1>
					<div className="flex flex-col items-end gap-[16px]">
						<p className=" self-right text-43 font-100 mr-[30px]">
							{content[number].currentNumber}
							<span className="text-light2">
								{content[number].amountOfSlides}
							</span>
						</p>
						<Image
							src={src}
							alt={content[number].subtitle}
							width={328}
							height={244}
						/>
						<p className="self-right text-12 font-200 leading-[24px] tracking-[2.4px] sm:text-14">
							{content[number].subtitle}
						</p>
					</div>
					<ul
						className="flex flex-col gap-[16px] items-left uppercase text-20 text-light2
					leading-[17px] max-w-[185px] sm:text-22 sm:leading-[26px] sm:max-w-[270px]"
					>
						{handleActivityClick()}
					</ul>
				</div>
				<h6 className="text-14 font-200 leading-[20px] max-w-[500px] sm:text-18">
					{content[number].description}
				</h6>
			</div>
		</Section>
	);
}

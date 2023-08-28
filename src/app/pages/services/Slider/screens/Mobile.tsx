import Image from "next/image";

import { Section } from "@/app/components/Section/Section";

import { useText } from "@/app/context/TextDataContext";

import { images } from "../data/images";

import s from "../Slider.module.scss";

export function Mobile({ number }: { number: number }) {
	const textData = useText();

	const text = textData.services;

	const src = images[number];

	return (
		<Section className={s.bgOverlay} id="services">
			<div className="min-h-[760px] flex flex-col justify-between items-center gap-[50px]">
				<div className="flex flex-col gap-[24px] w-full">
					<h2 className="text-40 font-100 uppercase leading-[56px] tracking-[-1.6px] items-start">
						{text.content[number].titlePartThin}
						<span className="font-500">
							{text.content[number].titlePartTBold}
						</span>
					</h2>
					<div className="flex flex-col items-end gap-[16px]">
						<p className=" self-right text-43 font-100 mr-[30px]">
							{text.content[number].currentNumber}
							<span className="text-light2">
								{text.content[number].amountOfSlides}
							</span>
						</p>
						<Image
							src={src}
							alt={text.content[number].subtitle}
							width={328}
							height={244}
						/>
						<p className="self-right text-12 font-200 leading-[24px] tracking-[2.4px] sm:text-14">
							{text.content[number].subtitle}
						</p>
					</div>
				</div>
				<h6 className="text-14 font-200 leading-[20px] max-w-[500px] sm:text-16">
					{text.content[number].description}
				</h6>
			</div>
		</Section>
	);
}

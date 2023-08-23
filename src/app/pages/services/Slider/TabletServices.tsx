import Image from "next/image";

import { Section } from "@/app/components/Section/Section";

import { content } from "./data/content";
import { images } from "./data/images";

import s from "./Slider.module.scss";

export function TabletServices({ number }: { number: number }) {
	const src = images[number];

	return (
		<Section className={s.bgOverlay} id="services">
			<div className="flex flex-col  gap-[24px] w-full">
				<div className="flex justify-between text-67 ">
					<h1 className="font-100 uppercase leading-normal tracking-[-2.68px] items-start">
						{content[number].titlePartThin}
						<span className="font-500">{content[number].titlePartTBold}</span>
					</h1>
					<p className=" self-right font-100">
						{content[number].currentNumber}
						<span className="text-light2">
							{content[number].amountOfSlides}
						</span>
					</p>
				</div>
				<div className="flex gap-[20px]">
					<Image
						src={src}
						alt={content[number].subtitle}
						width={463}
						height={370}
						layout="responsive"
						className="h-auto min-w-[463px]"
					/>
					<div className="flex flex-col items-start content-between gap-[20px] justify-between">
						<div className="flex flex-col gap-[25px]">
							<ul className="flex flex-col gap-[16px] items-left uppercase text-22 text-light2 leading-[18px] max-w-[185px]">
								{content[number].activity.map((a) => {
									return (
										<li
											key={a.id}
											className={
												a.active
													? "font-500 flex gap-[8px] text-white"
													: "font-200"
											}
										>
											{a.active && (
												<Image
													src="/svg/rhombus.svg"
													alt="rhombus"
													width={6}
													height={6}
												/>
											)}
											{a.name}
										</li>
									);
								})}
							</ul>
							<p className="self-right text-12 font-200 leading-[24px] tracking-[2.4px] sm:text-14">
								{content[number].subtitle}
							</p>
						</div>

						<h6 className="text-13 font-200 leading-[20px] max-w-[700px]">
							{content[number].description}
						</h6>
					</div>
				</div>
			</div>
		</Section>
	);
}

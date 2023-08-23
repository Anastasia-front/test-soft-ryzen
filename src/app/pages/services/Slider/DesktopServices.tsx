import Image from "next/image";

import { Section } from "@/app/components/Section/Section";

import { content } from "./data/content";
import { images } from "./data/images";

import s from "./Slider.module.scss";

export function DesktopServices({ number }: { number: number }) {
	const src = images[number];

	return (
		<Section className={s.bgOverlay} id="services">
			<div className="flex flex-col w-full">
				<div className="flex gap-[162px] text-98 ">
					<h1 className="font-100 uppercase leading-normal tracking-[-3.92px] items-start">
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
						width={607}
						height={429}
						layout="responsive"
						className=" max-w-[607px] h-auto"
					/>
					<div className="flex flex-col items-start content-between gap-[20px] justify-between min-w-[50%]">
						<div className="flex gap-[60px]">
							<ul className="flex flex-col gap-[24px] items-left uppercase text-28 text-light2 leading-[24px] max-w-[250px]">
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

						<h6 className="text-18 font-200 leading-[24px] max-w-[293px] text-justify self-end">
							{content[number].description}
						</h6>
					</div>
				</div>
			</div>
		</Section>
	);
}

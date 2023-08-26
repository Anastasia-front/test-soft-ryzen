"use client";

import { Section } from "@/app/components/Section/Section";

import { useText } from "@/app/context/TextDataContext";

import s from "./styles.module.scss";

export function About() {
	const textData = useText();

	const text = textData.about;

	return (
		<Section className={s.bg} id="about">
			<h2
				className="text-40 md:text-67 xl:text-98 font-100 leading-[40px] md:leading-[81px]
			pb-[8px] md:pb-0 tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px] uppercase"
			>
				{text.title.thinText}{" "}
				<span className="font-500">{text.title.boldText}</span>
			</h2>
			<div className="flex flex-col gap-[40px] leading-[20px] xl:leading-[24px] xl:w-[920px]">
				<div
					className="flex flex-col self-start md:self-end gap-[20px] md:gap-[16px] text-14
				md:text-16 xl:text-18 font-200 w-[180px] md:w-[220px] xl:w-[292px] md:mt-[-70px] xl:mt-[-85px]"
				>
					{text.description.map(
						(abstract: { boldText: string; thinText: string; id: number }) => (
							<p key={abstract.id}>
								<span className="font-400">{abstract.boldText}</span>{" "}
								{abstract.thinText}
							</p>
						)
					)}
				</div>
			</div>
			<div className="flex flex-col gap-[40px] md:gap-[64px] xl:flex-row-reverse xl:gap-[331px] leading-[20px] xl:mt-[72px]">
				<div
					className="w-[180px] md:w-[220px] xl:w-[298px] text-14 md:text-16 xl:text-18 font-400
				self-end md:self-start xl:self-end md:mt-[-60px] xl:mt-0 xl:mt-72px"
				>
					<p className="uppercase">{text.goal.from}</p>
					<p className="uppercase text-right">{text.goal.to}</p>
					<p className="font-200 tracking-[-0.14px] xl:tracking-[2.16px]">
						{text.goal.for}
					</p>
				</div>
				<p className="w-[280px] md:w-[463px] xl:w-[550px] text-14 font-200 self-center xl:self-start">
					<span className="font-400">{text.methods.boldText}</span>{" "}
					{text.methods.thinText}
				</p>
			</div>
		</Section>
	);
}

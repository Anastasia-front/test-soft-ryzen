"use client";

import { ButtonJoinNow } from "@/app/components/Button/ButtonJoinNow";

import { useText } from "@/app/context/TextDataContext";

export function MobileHome() {
	const textData = useText();

	const text = textData.home;

	return (
		<div className="flex flex-col gap-[24px] pt-[50px] items-center">
			<div className="text-37 uppercase self-end">
				<p className="font-100 tracking-[1.66px]">
					<span className="font-500">{text.duration.amount}</span>
					{text.duration.days}
				</p>
				<p className="text-12 font-300 tracking-[9.48px] mt-[-10px]">
					{text.duration.journey}
				</p>
			</div>
			<h1 className="uppercase self-start text-40 font-100 leading-[56px] tracking-[-1.6px] w-[280px] sm:text-center sm:self-center ">
				<span className="font-500">{text.title.boldText}</span>{" "}
				{text.title.thinText}
			</h1>
			<h6 className="font-200 text-10 leading-[16px] w-[157px] self-start sm:self-center xl:self-end">
				{text.places}
			</h6>
			<h4 className="font-200 text-14 leading-[20px] max-w-[345px] sm:text-center">
				{text.subtitle}
			</h4>
			<ButtonJoinNow />
		</div>
	);
}

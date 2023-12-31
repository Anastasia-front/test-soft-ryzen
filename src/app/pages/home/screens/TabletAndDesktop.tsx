"use client";

import { ButtonJoinNow } from "@/app/components/Button/ButtonJoinNow";

import { useText } from "@/app/context/TextDataContext";

export function TabletAndDesktop() {
	const textData = useText();

	const text = textData.home;

	return (
		<div className="flex flex-col gap-[24px] xl:gap-[28px] pt-[50px] items-center">
			<div className="flex justify-between w-full">
				<h1
					className="uppercase self-start text-67 font-100 leading-normal
				tracking-[-2.68px] w-[426px] xl:text-98 xl:tracking-[-3.92px] xl:w-[646px]"
				>
					<span className="font-500">{text.title.boldText}</span>{" "}
					{text.title.thinText}
				</h1>
				<div className="flex flex-col gap-[56px] xl:gap-[181px] xl:max-w-[294px]">
					<div className="text-67 uppercase self-end xl:text-98 xl:max-w-[294px]">
						<p className="font-100 tracking-[8.71px] xl:tracking-[-0.29px]">
							<span className="font-500">{text.duration.amount}</span>
							{text.duration.days}
						</p>
						<p className="text-14 xl:text-16 font-300 tracking-[25.9px] xl:tracking-[36.48px] mt-[-20px]">
							{text.duration.journey}
						</p>
					</div>
					<h4
						className="font-200 text-16 xl:text-18 leading-[20px] xl:leading-[24px]
					max-w-[230px] xl:max-w-[294px] text-justify"
					>
						{text.subtitle}
					</h4>
				</div>
			</div>
			<div className="flex justify-between w-full ">
				<h6
					className="font-200 text-14 xl:text-16 leading-[16px] xl:leading-[24px]
				w-[263px] xl:w-fit tracking-[1.26px] xl:tracking-[1.44px] self-end"
				>
					{text.places}
				</h6>
				<ButtonJoinNow />
			</div>
		</div>
	);
}

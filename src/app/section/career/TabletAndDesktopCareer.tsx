"use client";

import { useScreenQuery } from "@/app/hooks/useScreenQuery";
import { Form } from "./Form/Form";
import { whoUs } from "./data/whoUs";

export function TabletAndDesktopCareer() {
	const { isScreenTabletSm, isScreenTabletXl } = useScreenQuery();

	return (
		<div className="flex flex-col gap-[12px]">
			<div className="flex gap-[24px] justify-between items-center">
				<h1 className="text-67 xl:text-98 font-100 leading-[56px] md:leading-[81px] xl:leading-normal tracking-[-2.68px] xl:tracking-[-3.92px] uppercase">
					choose <span className="font-500">us</span>
				</h1>
				<p className="text-left xl:text-justify text-13 xl:text-18 font-200 leading-[20px] xl:leading-[24px] max-w-[222px] xl:max-w-[293px]">
					Your chance to join our passionate team in Carpathian tourism. Seeking
					talented professionals to share our common mission.
				</p>
			</div>
			<div className="flex flex-col gap-[56px] xl:gap-[45px]">
				<h2 className="self-left pl-[80px] xl:pl-[123px] text-30 xl:text-36 xl:leading-[39px] font-200 uppercase">
					Why us ?
				</h2>
				<div className="flex gap-[20px] l:gap-[100px] xl:gap-[24px] ">
					{isScreenTabletSm && !isScreenTabletXl && (
						<ul className="flex flex-col self-start gap-[24px] text-right leading-[20px] min-w-[222px] max-w-[277px]">
							{whoUs.map((w) => (
								<li key={w.id} className="flex flex-col items-end gap-[8px]">
									<h5 className="text-16 font-400">{w.title}</h5>
									<p className="text-12 font-200">{w.text}</p>
								</li>
							))}
						</ul>
					)}
					{isScreenTabletXl && (
						<ul className="flex flex-col self-start gap-[21px] leading-[24px] pl-[40px]">
							{whoUs.map((w) => (
								<li key={w.id} className="flex justify-between gap-[24px]">
									<h5 className="text-right text-18 font-400 w-[253px]">
										{w.title}
									</h5>
									<p className="text-12 font-200 w-[285px] pt-[3px]">
										{w.text}
									</p>
								</li>
							))}
						</ul>
					)}
					<div className="flex flex-col gap-[32px] xl:gap-[14px] xl:mt-[-85px] xl:w-[30vw]">
						<p className="text-left xl:text-justify text-13 xl:text-18 font-200 leading-[20px] xl:leading-[24px] max-w-[222px] xl:max-w-[234px]">
							Don't miss your opportunity! Fill out the form right now and join
							our team!
						</p>
						<Form />
					</div>
				</div>
			</div>
		</div>
	);
}

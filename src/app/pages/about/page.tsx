import { Section } from "@/app/components/Section/Section";

import s from "./styles.module.scss";

export default function About() {
	return (
		<Section className={s.bg} id="about">
			<h1
				className="text-40 md:text-67 xl:text-98 font-100 leading-[40px] md:leading-[81px]
			pb-[8px] md:pb-0 tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px] uppercase"
			>
				WHO <span className="font-500">WE ARE</span>
			</h1>
			<div className="flex flex-col gap-[40px] leading-[20px] xl:leading-[24px] xl:w-[920px]">
				<div
					className="flex flex-col self-start md:self-end gap-[20px] md:gap-[16px] text-14
				md:text-16 xl:text-18 font-200 w-[180px] md:w-[220px] xl:w-[292px] md:mt-[-70px] xl:mt-[-85px]"
				>
					<p>
						<span className="font-400">a team of enthusiasts</span> who are
						fully committed to the mission of creating unforgettable and
						extraordinary trips to the most beautiful parts of the Carpathians.
						Our goal is not just to show you the natural wonders of the
						mountains, but to provide you with a deep immersion in their magical
						atmosphere.
					</p>
					<p>
						<span className="font-400"> We believe</span> that nature has the
						power to inspire, strengthen character and provide new perspectives.
						Therefore, each of our tours is aimed at unlocking your potential,
						enriching your spiritual world and creating unforgettable memories.
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-[40px] md:gap-[64px] xl:flex-row-reverse xl:gap-[331px] leading-[20px] xl:mt-[72px]">
				<div
					className="w-[180px] md:w-[220px] xl:w-[298px] text-14 md:text-16 xl:text-18 font-400
				self-end md:self-start xl:self-end md:mt-[-60px] xl:mt-0 xl:mt-72px"
				>
					<p className="uppercase">From vacationers</p>
					<p className="uppercase text-right">to active travelers</p>
					<p className="font-200 tracking-[-0.14px] xl:tracking-[2.16px]">
						we have a tour for everyone.
					</p>
				</div>
				<p className="w-[280px] md:w-[463px] xl:w-[550px] text-14 font-200 self-center xl:self-start">
					<span className="font-400">We use methods</span> that are time-tested
					and proven. Our expert guides with in-depth knowledge of the
					Carpathian landscapes lead you safely through the mysteries of these
					mountains.
				</p>
			</div>
		</Section>
	);
}

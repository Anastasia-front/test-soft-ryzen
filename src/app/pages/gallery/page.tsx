import { Section } from "@/app/components/Section/Section";

import { Slider } from "./Slider/Slider";
import s from "./styles.module.scss";

export default function Gallery() {
	return (
		<Section
			className={`${s.bg} flex flex-col gap-[24px] items-center`}
			id="gallery"
		>
			<h1
				className="text-40 md:text-67 xl:text-98 font-100 leading-[40px] md:leading-[81px] xl:leading-normal
		    tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px] uppercase xl:self-start"
			>
				our <span className="font-500">gallery</span>
			</h1>
			<Slider />
		</Section>
	);
}

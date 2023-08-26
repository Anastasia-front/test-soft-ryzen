"use client";

import { useText } from "@/app/context/TextDataContext";

import { Form } from "../Form";

export function Mobile() {
	const textData = useText();

	const text = textData.career;

	return (
		<div className="flex flex-col gap-[36px]">
			<div className="flex flex-col gap-[24px]">
				<h2 className="self-start text-40 font-100 leading-[56px] md:leading-[81px] tracking-[-1.6px] uppercase">
					{text.title.thinText}{" "}
					<span className="font-500">{text.title.boldText}</span>
				</h2>
				<p className="self-end text-left text-14 font-200 leading-[20px] max-w-[179px] sm:max-w-[250px]">
					{text.chance}
				</p>
			</div>

			<div className="flex flex-col gap-[36px]">
				<h3 className="self-center pl-[50px] text-30 font-200 uppercase">
					{text.question}
				</h3>
				<ul className="flex flex-col self-start gap-[16px] text-right max-w-[180px] sm:max-w-[350px] ">
					{text.features.map(
						(feature: { title: string; text: string; id: number }) => (
							<li
								key={feature.id}
								className="flex flex-col items-end gap-[8px]"
							>
								<h5 className="text-14 font-400">{feature.title}</h5>
								<p className="text-12 font-200">{feature.text}</p>
							</li>
						)
					)}
				</ul>
			</div>

			<p className="self-end pt-[30px] text-right text-14 font-200 leading-[20px] max-w-[145px] sm:max-w-[250px]">
				{text.join}
			</p>
			<Form />
		</div>
	);
}

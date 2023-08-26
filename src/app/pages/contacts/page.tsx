"use client";

import { Section } from "@/app/components/Section/Section";
import { useText } from "@/app/context/TextDataContext";

import { Form } from "./Form";

import s from "./styles.module.scss";

type ContactItem = {
	id: number;
	type: string;
	name: string;
	items: Array<{
		id: number;
		type?: string;
		value: string;
		href?: string;
	}>;
};

export default function Contacts() {
	const textData = useText();

	const text = textData.contacts;

	return (
		<Section className={s.bg} id="contacts">
			<div className="flex flex-col gap-[36px] xl:gap-[71px]">
				<h2
					className="uppercase font-100 text-40 md:text-67 xl:text-98  leading-[56px] md:leading-[66px]
			tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px]"
				>
					{text.title.thinText}{" "}
					<span className="font-500"> {text.title.boldText}</span>
				</h2>
				<div
					className="self-end md:self-center  w-full
			md:flex md:flex-col md:gap-[64px] xl:flex-row xl:gap-[230px]"
				>
					<ul
						className="flex flex-col md:flex-wrap xl:flex-col xl:flex-nowrap
				 md:h-[100px] gap-y-[24px] gap-x-[90px] xl:gap-y-[64px] items-end
				 text-left xl:text-right xl:pl-[95px]"
					>
						{text.content.map((contact: ContactItem) => (
							<li
								key={contact.id}
								className="flex gap-[20px] last:flex-row-reverse
							xl:last:flex-row first:pr-0 last:pr-[15px] md:last:pr-[145px] pr-[46px]
							xl:last:pt-[60px] xl:last:pr-[28px] xl:w-[300px] xl:justify-end"
							>
								<ul>
									{contact.items.map((item) => (
										<li key={item.id}>
											<a
												rel="noopener noreferrer nofollow"
												target="_blank"
												href={item.href ? item.href : item.type + item.value}
												className="font-400 leading-[24px] text-14 sm:text-16 l:tex-18 "
											>
												{item.value}
											</a>
										</li>
									))}
								</ul>
								<p className="text-12 text-left font-200 leading-[20px] pt-[3px]">
									{contact.name}
								</p>
							</li>
						))}
					</ul>
					<Form />
				</div>
			</div>
		</Section>
	);
}

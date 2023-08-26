"use client";

import Image from "next/image";

import React, { useEffect, useState } from "react";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { Button } from "@/app/components/Button/Button";

import { useText } from "@/app/context/TextDataContext";

import { Slide } from "./Slide";

import s from "./Slider.module.scss";

interface ContentItem {
	id: number;
	titlePartThin: string;
	titlePartBold: string;
	currentNumber: string;
	amountOfSlides: string;
	subtitle: string;
	description: string;
}

export function Slider() {
	const textData = useText();

	const text = textData.services;

	const [currentSlide, setCurrentSlide] = React.useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		initial: 0,
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created() {
			setLoaded(true);
		},
	});

	const bgClassNames: Record<number, string> = {
		1: s.bg1,
		2: s.bg2,
		3: s.bg3,
		4: s.bg4,
		5: s.bg2,
	};

	const handleActivityClick = () => {
		return (
			loaded &&
			instanceRef.current && (
				<>
					{text.activities.map((activity: { id: number; name: string }) => {
						return (
							<li
								key={activity.id}
								className={`${
									currentSlide === activity.id - 1
										? "font-500 text-white"
										: "font-200"
								}`}
							>
								<Button
									onClick={() => {
										instanceRef.current?.moveToIdx(activity.id - 1);
									}}
									section="services"
								>
									{currentSlide === activity.id - 1 && (
										<Image
											src="/svg/rhombus.svg"
											alt="rhombus"
											width={6}
											height={6}
										/>
									)}
									{activity.name}
								</Button>
							</li>
						);
					})}
				</>
			)
		);
	};

	useEffect(() => {
		handleActivityClick();
	}, []);

	return (
		<div className={s.navigationWrapper}>
			<div>
				<div ref={sliderRef} className="keen-slider">
					{text.content.map((item: ContentItem, index: number) => (
						<div
							key={index}
							className={`keen-slider__slide bg-center bg-no-repeat bg-cover ${
								bgClassNames[item.id]
							}`}
						>
							<Slide number={index} handleActivityClick={handleActivityClick} />
						</div>
					))}
				</div>
				{loaded && instanceRef.current && (
					<>
						<Arrow
							left
							onClick={(e: any) =>
								e.stopPropagation() || instanceRef.current?.prev()
							}
							disabled={currentSlide === 0}
						/>

						<Arrow
							onClick={(e: any) =>
								e.stopPropagation() || instanceRef.current?.next()
							}
							disabled={
								currentSlide ===
								instanceRef.current.track.details.slides.length - 1
							}
						/>
					</>
				)}
			</div>
			{loaded && instanceRef.current && (
				<div className={s.dots}>
					{[
						...Array(instanceRef.current.track.details.slides.length).keys(),
					].map((idx) => {
						return (
							<Button
								key={idx}
								onClick={() => {
									instanceRef.current?.moveToIdx(idx);
								}}
								className={
									`${s.dot}` + (currentSlide === idx ? ` ${s.active}` : "")
								}
							></Button>
						);
					})}
				</div>
			)}
		</div>
	);
}

function Arrow(props: {
	disabled: boolean;
	left?: boolean;
	onClick: (e: any) => void;
}) {
	const disabled = props.disabled ? `${s.arrowDisabled}` : "";
	return (
		<svg
			onClick={props.onClick}
			className={`${s.arrow} ${
				props.left ? `${s.arrowLeft}` : `${s.arrowRight}`
			} ${disabled}`}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			{props.left && (
				<path
					fillRule="evenodd"
					d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
				/>
			)}
			{!props.left && (
				<path
					fillRule="evenodd"
					d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
				/>
			)}
		</svg>
	);
}

"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React, { useState } from "react";
import Slide from "./Slide";
import s from "./Slider.module.scss";
import { content } from "./data/content";

export default function Slider() {
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

	return (
		<div className={s.navigationWrapper}>
			<div>
				<div ref={sliderRef} className="keen-slider">
					{content.map((number, index) => (
						<div
							key={index}
							className={` keen-slider__slide bg-center bg-no-repeat bg-cover ${
								bgClassNames[number.id]
							}`}
						>
							<Slide number={index} />
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
							<button
								key={idx}
								onClick={() => {
									instanceRef.current?.moveToIdx(idx);
								}}
								className={
									`${s.dot}` + (currentSlide === idx ? ` ${s.active}` : "")
								}
							></button>
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

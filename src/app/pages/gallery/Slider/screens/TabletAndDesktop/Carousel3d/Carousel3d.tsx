import { type ReactNode } from "react";

import { StaticImageData } from "next/image";

import type { MotionProps } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";

import { useHandleDrag } from "@/app/hooks/useHandleDrag";

import { images } from "../../../data/images";

export interface CardData {
	src: StaticImageData;
	alt: string;
	id?: number;
}

interface SliderProps {
	className: string;
	renderContent: (card: CardData) => ReactNode;
	animate: MotionProps;
	screens?: Record<string, boolean>;
	paginate: (dir: number) => void;
	direction: number;
	visibleIndices: CardData[];
}

export function Carousel3d({
	className,
	renderContent,
	animate,
	screens,
	paginate,
	direction,
	visibleIndices,
}: SliderProps) {
	const getImageIndex = (item: StaticImageData) => {
		const altOfItem = images.find((image) => image.src === item)?.alt;

		switch (altOfItem) {
			case visibleIndices[0].alt:
				return "left";
			case visibleIndices[1].alt:
				return "center";
			case visibleIndices[2].alt:
				return "right";
			default:
				return "right";
		}
	};

	const { handleDragEnd, handleDragStart } = useHandleDrag(
		() => paginate(1),
		() => paginate(-1)
	);

	return (
		<div className={className}>
			<AnimatePresence mode="popLayout" custom={direction} initial={false}>
				{visibleIndices.map((card) => {
					const { src, id } = card;
					return (
						<motion.div
							key={id}
							className={`flex items-center justify-center ${
								getImageIndex(src) === "left" ||
								(getImageIndex(src) === "right" && "bg-unActiveImage")
							}`}
							layout
							custom={{
								slidePosition: getImageIndex(src),
								direction,
								...screens,
							}}
							{...animate}
							onDragStart={handleDragStart}
							onDragEnd={handleDragEnd}
						>
							{renderContent(card)}
						</motion.div>
					);
				})}
			</AnimatePresence>
		</div>
	);
}

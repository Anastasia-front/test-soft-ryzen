"use client";

import { ModalPortal } from "./ModalPortal";

interface ModalSubmitProps {
	text: string;
	isOpen: boolean;
	onCloseMenu: () => void;
}

export function ModalSubmit({ isOpen, text, onCloseMenu }: ModalSubmitProps) {
	return (
		<ModalPortal isOpen={isOpen} onCloseMenu={onCloseMenu} className="bg-black">
			<p
				className="text-center text-20 md:text-30 xl:text-40 font-100 leading-[40px]
			 md:leading-[81px] uppercase"
			>
				{text}
			</p>
		</ModalPortal>
	);
}

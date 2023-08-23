"use client";
import { useState } from "react";
import { ModalPortal } from "../Modal/ModalPortal/ModalPortal";
import { Navigation } from "./Navigation";

export function BurgerMenu() {
	const [open, setOpen] = useState(false);
	const onOpenMenu = () => {
		setOpen(true);
	};
	const onCloseMenu = () => {
		setOpen(false);
	};
	return !open ? (
		<button
			type="button"
			className="uppercase font-400 text-14 tracking-[1.4px]"
			onClick={onOpenMenu}
		>
			MENU
		</button>
	) : (
		<ModalPortal onCloseMenu={onCloseMenu}>
			<Navigation />
		</ModalPortal>
	);
}

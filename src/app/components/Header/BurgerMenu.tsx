"use client";

import { useState } from "react";

import { Navigation } from "@/app/components/Header/Navigation";

import { Button } from "../Button/Button";
import { ModalPortal } from "../Modal/ModalPortal";

export function BurgerMenu() {
	const [open, setOpen] = useState(false);
	const onOpenMenu = () => {
		setOpen(true);
	};
	const onCloseMenu = () => {
		setOpen(false);
	};
	return !open ? (
		<Button
			section="header"
			className="font-400 text-14 tracking-[1.4px]"
			onClick={onOpenMenu}
		>
			MENU
		</Button>
	) : (
		<ModalPortal onCloseMenu={onCloseMenu}>
			<Navigation onCloseMenu={onCloseMenu} />
		</ModalPortal>
	);
}

"use client";
import { useState } from "react";
import { ModalPortal } from "../ModalPortal/ModalPortal";

export function ModalSubmit() {
	const [open, setOpen] = useState(false);
	const onOpenMenu = () => {
		setOpen(true);
	};
	const onCloseMenu = () => {
		setOpen(false);
	};
	return (
		<ModalPortal onCloseMenu={onCloseMenu}>
			<p>Your message was sent</p>
		</ModalPortal>
	);
}

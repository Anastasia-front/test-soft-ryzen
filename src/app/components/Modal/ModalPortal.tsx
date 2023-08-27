import ReactDOM from "react-dom";

import { useKeyPress } from "@/app/hooks/useKeyPress";
import { Button } from "../Button/Button";

interface ModalProps {
	className?: string;
	children: React.ReactNode;
	onCloseMenu: () => void;
}

export function ModalPortal({ onCloseMenu, className, children }: ModalProps) {
	useKeyPress("Escape", onCloseMenu);

	const portalContainerId = "modal-root";

	const portalContainer = document.getElementById(portalContainerId);
	if (!portalContainer) {
		return null;
	}

	const bgOverlay = className ? className : "bg-overlay";

	const modalContent = (
		<div
			className={`fixed top-0 left-0 w-[100vw] h-[100vh]
			flex justify-center items-center z-50 ${bgOverlay}`}
			onClick={onCloseMenu}
		>
			<Button
				section="modal"
				className="z-40 font-400 text-14 tracking-[1.4px] absolute top-[43px] right-[20px]"
				onClick={onCloseMenu}
			>
				CLOSE
			</Button>
			{children}
		</div>
	);

	return ReactDOM.createPortal(modalContent, portalContainer);
}

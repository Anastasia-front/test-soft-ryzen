import { useKeyPress } from "@/app/hooks/useKeyPress";
import ReactDOM from "react-dom";
interface ModalProps {
	children: React.ReactNode;
	onCloseMenu: () => void;
}

export function ModalPortal({ onCloseMenu, children }: ModalProps) {
	useKeyPress("Escape", onCloseMenu);

	const portalContainerId = "modal-root";

	const portalContainer = document.getElementById(portalContainerId);
	if (!portalContainer) {
		return null;
	}

	const modalContent = (
		<div
			className="bg-overlay fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center z-50"
			onClick={onCloseMenu}
		>
			<button
				type="button"
				className="uppercase z-40 font-400 text-14 tracking-[1.4px] absolute top-[43px] right-[20px]"
				onClick={onCloseMenu}
			>
				CLOSE
			</button>
			{children}
		</div>
	);

	return ReactDOM.createPortal(modalContent, portalContainer);
}

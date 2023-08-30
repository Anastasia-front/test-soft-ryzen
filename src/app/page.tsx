import { ButtonArrowUp } from "./components/Button/ButtonArrowUp";
import { Sections } from "./components/Sections/Sections";

export default function App() {
	return (
		<div className="relative overflow-hidden">
			<Sections />
			<ButtonArrowUp className="fixed bottom-[50px] right-[3%] z-30" />
			<div id="modal-root"></div>
		</div>
	);
}

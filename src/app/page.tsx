import { ButtonArrowUp } from "./components/Button/ButtonArrowUp/ButtonArrowUp";
import { Sections } from "./components/Sections/Sections";

export default function App() {
	return (
		<div className="relative">
			<Sections />
			<ButtonArrowUp className="fixed bottom-[50px] right-[3%]" />
			<div id="modal-root"></div>
		</div>
	);
}

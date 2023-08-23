import About from "@/app/section/about/page";
import Career from "@/app/section/career/page";
import Contacts from "@/app/section/contacts/page";
import Gallery from "@/app/section/gallery/page";
import Home from "@/app/section/home/page";
import Services from "@/app/section/services/page";
import { Header } from "../Header/Header";

export function Sections() {
	return (
		<>
			<Header className="absolute top-0 left-0" />
			<main>
				<Home className="relative" />
				<About />
				<Services />
				<Career />
				<Gallery />
				<Contacts />
			</main>
		</>
	);
}

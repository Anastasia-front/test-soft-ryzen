import { About } from "@/app/pages/about/page";
import { Career } from "@/app/pages/career/page";
import { Contacts } from "@/app/pages/contacts/page";
import { Gallery } from "@/app/pages/gallery/page";
import { Home } from "@/app/pages/home/page";
import { Services } from "@/app/pages/services/page";

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

"use client";

import { useText } from "@/app/context/TextDataContext";
import { useScreenQuery } from "@/app/hooks/useScreenQuery";

import { Link } from "react-scroll";

interface NavigationProps {
	onCloseMenu: () => void;
}

type Section = {
	id: number;
	name: string;
	href: string;
};

export function Navigation({ onCloseMenu }: NavigationProps) {
	const textData = useText();

	const sections = textData.home.navigation;

	const { isScreenTabletSm, isScreenTabletXl } = useScreenQuery();

	const offset = isScreenTabletXl ? 80 : isScreenTabletSm ? 60 : 10;

	return (
		<nav>
			<ul
				className="flex flex-col gap-[48px] md:flex-row md:gap-[24px] xl:gap-[56px] capitalize
			font-400 text-18 tracking-[1.8px] md:text-14 md:tracking-[1.4px]"
			>
				{sections.map((section: Section) => (
					<li key={section.id}>
						<Link
							activeClass="active"
							href="/"
							to={section.href}
							spy={true}
							smooth={true}
							offset={offset}
							duration={500}
							onClick={onCloseMenu}
						>
							{section.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

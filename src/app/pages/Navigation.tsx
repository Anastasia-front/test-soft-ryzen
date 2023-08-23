import { sections } from "../components/Header/data/sections";

import { Link } from "react-scroll";

interface NavigationProps {
	onCloseMenu: () => void;
}

export function Navigation({ onCloseMenu }: NavigationProps) {
	return (
		<nav>
			<ul
				className="flex flex-col gap-[48px] md:flex-row md:gap-[24px] xl:gap-[56px] capitalize
			font-400 text-18 tracking-[1.8px] md:text-14 md:tracking-[1.4px]"
			>
				{sections.map((s) => (
					<li key={s.id}>
						<Link
							activeClass="active"
							to={s.href}
							spy={true}
							smooth={true}
							offset={10}
							duration={500}
							onClick={onCloseMenu}
						>
							{s.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

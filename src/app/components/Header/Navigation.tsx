import Link from "next/link";
import { sections } from "./data/sections";
export default function Navigation() {
	return (
		<nav>
			<ul className="flex flex-col gap-[48px]  md:flex-row md:gap-[24px] xl:gap-[56px] capitalize font-400 text-18 tracking-[1.8px] md:text-14 md:tracking-[1.4px]">
				{sections.map((s) => (
					<li key={s.id}>
						<Link href={s.href} scroll={true}>
							{s.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

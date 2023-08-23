import { Form } from "./Form/Form";
import { whoUs } from "./data/whoUs";

export function MobileCareer() {
	return (
		<div className="flex flex-col gap-[36px]">
			<div className="flex flex-col gap-[24px]">
				<h1 className="self-start text-40 font-100 leading-[56px] md:leading-[81px] tracking-[-1.6px] uppercase">
					choose <span className="font-500">us</span>
				</h1>
				<p className="self-end text-left text-14 font-200 leading-[20px] max-w-[179px] sm:max-w-[250px]">
					Your chance to join our passionate team in Carpathian tourism. Seeking
					talented professionals to share our common mission.
				</p>
			</div>

			<div className="flex flex-col gap-[36px]">
				<h2 className="self-center pl-[50px] text-30 font-200 uppercase">
					Why us ?
				</h2>
				<ul className="flex flex-col self-start gap-[16px] text-right max-w-[180px] sm:max-w-[350px] ">
					{whoUs.map((w) => (
						<li key={w.id} className="flex flex-col items-end gap-[8px]">
							<h5 className="text-14 font-400">{w.title}</h5>
							<p className="text-12 font-200">{w.text}</p>
						</li>
					))}
				</ul>
			</div>

			<p className="self-end pt-[30px] text-right text-14 font-200 leading-[20px] max-w-[145px] sm:max-w-[250px]">
				Don't miss your opportunity! Fill out the form right now and join our
				team!
			</p>
			<Form />
		</div>
	);
}

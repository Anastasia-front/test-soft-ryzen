import Section from "@/app/components/Section/Section";
import { Form } from "./Form/Form";
import s from "./styles.module.scss";

export default function Career() {
	return (
		<Section className={s.bg} id="career">
			<Form />
		</Section>
	);
}

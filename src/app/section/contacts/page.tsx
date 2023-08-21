import Section from "@/app/components/Section/Section";
import { Form } from "./Form/Form";
import s from "./styles.module.scss";

export default function Contacts() {
	return (
		<Section className={s.bg} id="contacts">
			<Form />
		</Section>
	);
}

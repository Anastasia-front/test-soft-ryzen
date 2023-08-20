import Image from "next/image";
import s from "./ErrorMessage.module.scss";

interface ErrorMessageProps {
	value: string;
}

export function ErrorMessage(props: ErrorMessageProps) {
	return (
		<div className={s.ErrorMessage}>
			<Image src="/svg/cross.svg" alt="cross" width={18} height={18} />
			<p>Incorrect {props.value}</p>
		</div>
	);
}

"use client";

import { useMemo } from "react";
import type { SubmitHandler, UseFormRegisterReturn } from "react-hook-form";
import { useForm } from "react-hook-form";

import { Checkbox } from "@/app/components/Input/Checkbox/Checkbox";
import { TextInput } from "@/app/components/Input/TextInput";
import { isObjectEmpty } from "../../../../../helpers/isObjectEmpty";

import { formList } from "./data/formList";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import type { FormFields } from "./types/FormFields";

import s from "./Form.module.scss";

interface Field {
	type: string;
	name: string;
	label?: string;
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
	register: () => UseFormRegisterReturn<keyof FormFields>;
	options?: string[];
	text?: string;
	defaultValue?: string;
}

type FormFieldsData = {
	[key: string]: Field;
};

export function Form() {
	const {
		register,
		unregister,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormFields>({
		mode: "onSubmit",
		defaultValues: {
			fullName: "",
			email: "",
			phone: "+ 38 ",
			position: "",
			consent: "",
		},
	});

	const formFieldsData: FormFieldsData = useMemo(
		() => ({
			fullName: {
				type: "text",
				name: "fullName",
				label: "Full name",
				placeholder: "John Smith",
				required: true,
				register: () =>
					register("fullName", {
						required: "Enter more than 10 characters",
					}),
			},
			email: {
				type: "text",
				name: "email",
				label: "E-mail",
				placeholder: "johnsmith@email.com",
				required: true,
				register: () =>
					register("email", {
						required: "Enter correct email",
					}),
			},
			phone: {
				type: "text",
				name: "phone",
				label: "Phone",
				placeholder: "(097) 12 34 567",
				required: true,
				register: () =>
					register("phone", {
						required: "Поле таке пусте! Введіть більше символів!",
					}),
			},
			position: {
				type: "text",
				name: "position",
				label: "Position",
				placeholder: "Movie maker",
				required: true,
				register: () =>
					register("position", {
						required: "Поле таке пусте! Введіть більше символів!",
					}),
			},
			consent: {
				type: "checkbox",
				name: "consent",
				placeholder: "",
				required: true,
				register: () =>
					register("consent", {
						required: true,
					}),
				text: "I confirm my consent to the processing of personal data.",
			},
		}),
		[register]
	);

	const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
		console.log(data);
	};

	const isValidFixed = isObjectEmpty(errors);

	return (
		<div className={s.Form}>
			<form className={s.formFields} onSubmit={handleSubmit(onSubmit)}>
				{formList.map((field) => {
					if (!formFieldsData[field]) return null;

					switch (formFieldsData[field].type) {
						case "text":
							return (
								<TextInput
									key={field}
									label={formFieldsData[field].label}
									register={formFieldsData[field].register()}
									errors={errors}
									required={formFieldsData[field].required}
									disabled={formFieldsData[field].disabled}
									placeholder={formFieldsData[field].placeholder}
									className={s.field}
								/>
							);
						case "checkbox":
							return (
								<Checkbox
									key={field}
									label={formFieldsData[field].label}
									register={formFieldsData[field].register()}
									errors={errors}
									required={formFieldsData[field].required}
									disabled={formFieldsData[field].disabled}
									className={s.field}
									text={formFieldsData[field].text || ""}
								/>
							);
					}
				})}

				<button
					className={s.submitButton}
					type="submit"
					disabled={!isValidFixed}
				>
					SEND
				</button>
				<ErrorMessage value="name" />
			</form>
		</div>
	);
}

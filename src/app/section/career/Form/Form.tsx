"use client";

import { Button } from "@/app/components/Button/Button";
import { Checkbox } from "@/app/components/Input/Checkbox/Checkbox";
import { TextInput } from "@/app/components/Input/TextInput";
import { Textarea } from "@/app/components/Textarea/Textarea";
import { useMemo } from "react";
import type { SubmitHandler, UseFormRegisterReturn } from "react-hook-form";
import { useForm } from "react-hook-form";
import { isObjectEmpty } from "../../../../../helpers/isObjectEmpty";
import { formList } from "./data/formList";
import type { FormFields } from "./types/FormFields";

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
		reset,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormFields>({
		mode: "onSubmit",
		defaultValues: {
			fullName: "",
			email: "",
			phone: "",
			position: "",
			message: "",
			consent: false,
		},
	});

	const watchConsent = watch("consent");

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
						required: "Incorrect name",
						pattern: /^[a-zA-Z]+\s[a-zA-Z]+$/,
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
						required: "Incorrect e-mail",
						pattern: /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
					}),
			},
			phone: {
				type: "text",
				name: "phone",
				label: "Phone",
				placeholder: "+38 (097) 12 34 567",
				required: true,
				register: () =>
					register("phone", {
						required: "Incorrect phone",
						pattern:
							/^(?:(?:\+380|0)[.-]?\d{2}[.-]?\d{2}[.-]?\d{2}[.-]?\d{3}|\d{10})$/,
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
						required: "Incorrect position",
						pattern: /^[a-zA-Z]/,
					}),
			},
			message: {
				type: "message",
				name: "message",
				label: "Message",
				placeholder: "",
				register: () => register("message"),
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
		alert("Your information was sent");
		reset();
	};

	const isValidFixed =
		isObjectEmpty(errors) &&
		formList.every((field) => {
			const fieldData = formFieldsData[field];
			if (fieldData.required) {
				return !!watch(fieldData.name);
			}
			return true;
		}) &&
		watch("consent");

	return (
		<form
			className="flex flex-col w-[100%] md:w-[60vw] xl:w-[45vw] gap-[16px] xl:gap-[24px] justify-center items-center sm:pl-[20px] md:pl-0"
			onSubmit={handleSubmit(onSubmit)}
		>
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
								className={`self-start ${
									formFieldsData[field].name === "phone"
										? "placeholder:first-line:text-white"
										: ""
								}`}
							/>
						);
					case "message":
						return (
							<Textarea
								key={field}
								label={formFieldsData[field].label}
								register={formFieldsData[field].register()}
								errors={errors}
								disabled={formFieldsData[field].disabled}
								className="self-start md:ml-[250px] md:mt-[-272px] xl:ml-[314px] xl:mt-[-320px]"
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
								className="self-start md:w-[222px] xl:w-[290px] md:pt-[16px] xl:pt-[12px]"
								text={formFieldsData[field].text || ""}
							/>
						);
				}
			})}
			<Button
				type="submit"
				submit
				disabled={!watchConsent || !isValidFixed}
				className="md:mt-[-75px] md:ml-[420px] xl:mt-[-85px] xl:ml-[552px]"
			>
				SEND
			</Button>
		</form>
	);
}

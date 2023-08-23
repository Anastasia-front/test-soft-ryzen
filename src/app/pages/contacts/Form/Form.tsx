"use client";

import { useMemo, useState } from "react";
import type { SubmitHandler, UseFormRegisterReturn } from "react-hook-form";
import { useForm } from "react-hook-form";

import { Button } from "@/app/components/Button/Button";
import { TextInput } from "@/app/components/Input/TextInput";
import { ModalSubmit } from "@/app/components/Modal/ModalSubmit/ModalSubmit";
import { Textarea } from "@/app/components/Textarea/Textarea";
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
			message: "",
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
			message: {
				type: "message",
				name: "message",
				label: "Message",
				placeholder: "",
				register: () => register("message"),
			},
		}),
		[register]
	);

	const watchFields = watch(["fullName", "email"]);

	const [open, setOpen] = useState(false);
	const onOpenMenu = () => {
		setOpen(true);
	};
	const onCloseMenu = () => {
		setOpen(false);
	};

	const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
		console.log(data);
		onOpenMenu();
		reset();
	};

	return (
		<form
			className="flex flex-col w-[100%] gap-[16px] justify-center items-center"
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
									field === "email" && "xl:mt-[-72px] xl:ml-[315px]"
								}`}
							/>
						);
					case "message":
						return (
							<Textarea
								section="contacts"
								key={field}
								label={formFieldsData[field].label}
								register={formFieldsData[field].register()}
								errors={errors}
								required={formFieldsData[field].required}
								disabled={formFieldsData[field].disabled}
								className="self-start"
							/>
						);
				}
			})}
			<Button type="submit" submit disabled={!watchFields} className="self-end">
				SEND
			</Button>
			{open && (
				<ModalSubmit
					text="Your information was sent"
					onCloseMenu={onCloseMenu}
				/>
			)}
		</form>
	);
}

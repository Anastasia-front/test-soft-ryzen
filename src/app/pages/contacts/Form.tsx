"use client";

import { useMemo, useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import { Button } from "@/app/components/Button/Button";
import { TextInput } from "@/app/components/Input/TextInput";
import { ModalSubmit } from "@/app/components/Modal/ModalSubmit";
import { Textarea } from "@/app/components/Textarea/Textarea";

import { useText } from "@/app/context/TextDataContext";

import { isObjectEmpty } from "@/app/helpers/isObjectEmpty";

import { FormFields, FormFieldsData } from "@/app/types/formTypes";

export function Form() {
	const textData = useText();

	const formList = textData.contacts.form.formList;
	const field = textData.contacts.form.fields;
	const required = textData.contacts.form.required;
	const button = textData.contacts.form.button;
	const modal = textData.contacts.form.modal;

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
				type: field.fullName.type,
				inputMode: field.fullName.inputMode,
				name: field.fullName.name,
				label: field.fullName.label,
				placeholder: field.fullName.placeholder,
				required: true,
				register: () =>
					register(field.fullName.name, {
						required: required,
						pattern: new RegExp(field.fullName.pattern),
					}),
			},
			email: {
				type: field.email.type,
				inputMode: field.email.inputMode,
				name: field.email.name,
				label: field.email.label,
				placeholder: field.email.placeholder,
				required: true,
				register: () =>
					register(field.email.name, {
						required: required,
						pattern: new RegExp(field.email.pattern),
					}),
			},
			message: {
				type: field.message.type,
				inputMode: field.message.inputMode,
				name: field.message.name,
				label: field.message.label,
				placeholder: field.message.placeholder,
				required: true,
				register: () =>
					register(field.message.name, {
						pattern: new RegExp(field.message.pattern),
					}),
			},
		}),
		[register]
	);

	const watchFullName = watch("fullName");
	const watchEmail = watch("email");

	const isValidFixed = isObjectEmpty(errors);

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
			{formList.map((field: string) => {
				if (!formFieldsData[field]) return null;

				switch (formFieldsData[field].type) {
					case "text":
						return (
							<TextInput
								key={field}
								inputMode={formFieldsData[field].inputMode}
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
			<Button
				type="submit"
				submit
				disabled={!isValidFixed || !watchFullName || !watchEmail}
				className="self-end uppercase"
			>
				{button}
			</Button>
			{open && <ModalSubmit text={modal} onCloseMenu={onCloseMenu} />}
		</form>
	);
}

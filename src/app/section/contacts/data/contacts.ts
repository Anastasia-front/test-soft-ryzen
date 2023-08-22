type ContactItem = {
	id: number;
	type: string;
	name: string;
	items: Array<{
		id: number;
		type?: string;
		value: string;
		href?: string;
	}>;
};

export const contacts: ContactItem[] = [
	{
		id: 1,
		type: "tel:",
		name: "Phone number",
		items: [
			{ id: 1, type: "tel:", value: "+38 (098) 12 34 567" },
			{ id: 2, type: "tel:", value: "+38 (073) 12 34 567" },
		],
	},
	{
		id: 2,
		type: "mailto:",
		name: "E-mail",
		items: [{ id: 1, type: "mailto:", value: "support@carptravel.com" }],
	},
	{
		id: 3,
		type: "https://",
		name: "Follow us",
		items: [
			{ id: 1, value: "facebook", href: "#" },
			{ id: 2, value: "instagram", href: "#" },
			{ id: 3, value: "youtube", href: "#" },
			{ id: 4, value: "tiktok", href: "#" },
		],
	},
];

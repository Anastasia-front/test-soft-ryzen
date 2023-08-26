"use client";

import { useEffect, useState } from "react";

export function useTextData() {
	const [textData, setTextData] = useState<Record<string, any>>({});
	const [loading, setLoading] = useState(true); // Add loading state

	useEffect(() => {
		async function fetchText() {
			try {
				const response = await fetch("/text.json");
				if (!response.ok) {
					throw new Error("Error loading text");
				}
				const data = await response.json();
				setTextData(data);
				setLoading(false);
			} catch (error) {
				console.error("Error loading text: ", error);
			}
		}

		fetchText();
	}, []);

	return { textData, loading };
}

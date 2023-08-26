"use client";

import React, { createContext, useContext } from "react";
import { useTextData } from "../hooks/useTextData";

const TextDataContext = createContext<Record<string, any>>({});

export function TextDataProvider({ children }: { children: React.ReactNode }) {
	const { textData, loading } = useTextData();

	return (
		<TextDataContext.Provider value={textData}>
			{loading ? <p>Loading...</p> : children} {/* Render loading indicator */}
		</TextDataContext.Provider>
	);
}

export function useText() {
	return useContext(TextDataContext);
}

"use client";

import React, { createContext, useContext } from "react";

import { useTextData } from "../hooks/useTextData";

const TextDataContext = createContext<Record<string, any>>({});

export function TextDataProvider({ children }: { children: React.ReactNode }) {
	const { textData, loading } = useTextData();

	return (
		<TextDataContext.Provider value={textData}>
			{loading ? (
				<div className="flex px-[10px] items-center justify-center h-[100vh] gap-[50px]">
					<span className="loader"></span>
					<p className="font-300 text-20 md:text-30 xl:text-40 tracking-tight">
						Please wait while the page is loading...
					</p>
				</div>
			) : (
				children
			)}
		</TextDataContext.Provider>
	);
}

export function useText() {
	return useContext(TextDataContext);
}

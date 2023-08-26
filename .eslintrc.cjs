module.exports = {
	extends: "next/core-web-vitals",
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/jsx-runtime",
		"next/core-web-vitals",
		"./.eslintrc-typescript.cjs",
		"prettier",
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "simple-import-sort"],
	rules: {
		indent: ["error", "tab", { SwitchCase: 1 }],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "single", { avoidEscape: true }],
		semi: ["error", "always"],
		"simple-import-sort/imports": [
			"error",
			{
				groups: [
					["use client", "^next/", "^react", "^react-", "^@?\\w"],

					["^@/app/components"],

					["^@/app/context"],

					["^@/app/helpers"],

					["^@/app/hooks"],

					["^@/app/pages"],

					["^@/app/types"],

					["^[./]"],

					[".(sc|sa|c)ss$"],
				],
			},
		],
		"react/self-closing-comp": "warn",
	},
};

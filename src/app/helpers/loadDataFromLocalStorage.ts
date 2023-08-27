export function loadDataFromLocalStorage(key: string) {
	try {
		const rawData = localStorage.getItem(key);

		if (rawData !== null) {
			const data = JSON.parse(rawData);

			return data;
		}
	} catch (error) {
		console.error("Error when fetching data from LocalStorage:", error);
		return null;
	}
}

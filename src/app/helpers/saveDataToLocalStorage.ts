export function saveDataToLocalStorage(key: string, data: any) {
	try {
		localStorage.setItem(key, JSON.stringify(data));
	} catch (error) {
		console.error("Error of saving data into LocalStorage:", error);
	}
}

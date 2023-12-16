import { IDoc } from "../types";
import { BASE, BACKEND_API_ENDPOINT } from "./Constants";

const getData = async (id: string): Promise<IDoc> => {
	const res = await fetch(`${BASE}/bestpractices/${id}.json`);
	return await res.json();
}
const askGpt = async (data: string): Promise<any> => {
	const res = await fetch(`${BACKEND_API_ENDPOINT}chatgpt/get_cheatsheet_details`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
			// You may need to add other headers like authorization if required
		},
		body: JSON.stringify({
			data: data,
			apiKey: ''
		})
	});
	//const apiResponse =  await res.json();
	return await res.json();
}
export{
	getData,
	askGpt
}
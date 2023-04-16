import { API_ENDPOINT, TEMP_TOKEN } from '$env/static/private';
import axios from 'axios';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const response = await axios.get(`${API_ENDPOINT}/v1/authors`, {
		headers: {
			Authorization: TEMP_TOKEN,
		},
	});

	return response.data;
};

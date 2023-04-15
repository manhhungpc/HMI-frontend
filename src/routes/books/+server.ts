import { API_ENDPOINT, TEMP_TOKEN } from '$env/static/private';
import axios from 'axios';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const req = await request.json();
	console.log(req);
	const response = await axios.post(`${API_ENDPOINT}/v1/books`, req, {
		headers: {
			Authorization: TEMP_TOKEN,
		},
	});

	return json(response.data);
};

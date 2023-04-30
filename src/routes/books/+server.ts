import { API_ENDPOINT, TEMP_TOKEN } from '$env/static/private';
import axios from 'axios';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ request }) => {
	const token = request.headers.get('Authorization');
	let response: any;
	try {
		response = await axios.get(`${API_ENDPOINT}/v1/books`, {
			headers: {
				Authorization: token,
			},
		});
	} catch (err: any) {
		response = err.response;
	}

	return json(response.data);
};

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

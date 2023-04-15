import { API_ENDPOINT, TEMP_TOKEN } from '$env/static/private';
import axios from 'axios';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const PUT: RequestHandler = async ({ request, params }) => {
	const req = await request.json();
	console.log(req, params);
	const response = await axios.put(`${API_ENDPOINT}/v1/books/${params.bookId}`, req, {
		headers: {
			Authorization: TEMP_TOKEN,
		},
	});

	return json(response.data);
};

export const DELETE: RequestHandler = async ({ params }) => {
	console.log(params);
	const response = await axios.delete(`${API_ENDPOINT}/v1/books/${params.bookId}`, {
		headers: {
			Authorization: TEMP_TOKEN,
		},
	});

	return json(response.data);
};

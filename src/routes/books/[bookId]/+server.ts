import { API_ENDPOINT, TEMP_TOKEN } from '$env/static/private';
import axios from 'axios';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ request, params }) => {
	const token = request.headers.get('Authorization');
	const response = await axios.get(`${API_ENDPOINT}/v1/books/${params.bookId}`, {
		headers: {
			Authorization: token,
		},
	});

	return json(response.data);
};

export const PUT: RequestHandler = async ({ request, params }) => {
	const req = await request.json();
	const response = await axios.put(`${API_ENDPOINT}/v1/books/${params.bookId}`, req, {
		headers: {
			Authorization: TEMP_TOKEN,
		},
	});

	return json(response.data);
};

export const DELETE: RequestHandler = async ({ request, params }) => {
	console.log(params, request.headers, request.headers.get('Authorization'));
	const response = await axios.delete(`${API_ENDPOINT}/v1/books/${params.bookId}`, {
		headers: {
			Authorization: TEMP_TOKEN,
		},
	});

	return json(response.data);
};

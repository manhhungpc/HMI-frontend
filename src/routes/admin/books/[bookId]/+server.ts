import { API_ENDPOINT, TEMP_TOKEN } from '$env/static/private';
import axios from 'axios';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const PUT: RequestHandler = async ({ request, params }) => {
	const req = await request.json();
	let response;
	try {
		response = await axios.put(`${API_ENDPOINT}/v1/books/${params.bookId}`, req, {
			headers: {
				Authorization: request.headers.get('Authorization'),
			},
		});
	} catch (err: any) {
		console.log(err);
		response = err.response;
	}

	return json(response.data);
};

export const DELETE: RequestHandler = async ({ request, params }) => {
	let response;
	try {
		response = await axios.delete(`${API_ENDPOINT}/v1/books/${params.bookId}`, {
			headers: {
				Authorization: request.headers.get('Authorization'),
			},
		});
	} catch (err: any) {
		console.log(err);
		response = err.response;
	}

	return json(response.data);
};

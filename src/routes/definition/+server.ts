import { API_ENDPOINT } from '$env/static/private';
import axios from 'axios';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ request, url }) => {
	const token = request.headers.get('Authorization');
	const word = url.searchParams.get('q');
	let response: any;
	try {
		response = await axios.get(`${API_ENDPOINT}/v1/words/definition?q=${word}`, {
			headers: {
				Authorization: token,
			},
		});
	} catch (err: any) {
		response = err.response;
	}

	return json(response.data);
};

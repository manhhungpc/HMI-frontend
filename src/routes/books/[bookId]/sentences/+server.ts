import { API_ENDPOINT } from '$env/static/private';
import axios from 'axios';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ request, params }) => {
	const token = request.headers.get('Authorization');
	let response: any;
	try {
		response = await axios.get(
			`${API_ENDPOINT}/v1/books/${params.bookId}/sentences?page=0&limit=15`,
			{
				headers: {
					Authorization: token,
				},
			}
		);
	} catch (err: any) {
		response = err.response;
	}

	return json(response.data);
};

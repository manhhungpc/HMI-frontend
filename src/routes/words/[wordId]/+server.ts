import { API_ENDPOINT } from '$env/static/private';
import axios from 'axios';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const DELETE: RequestHandler = async ({ request, params }) => {
	const token = request.headers.get('Authorization');
	let response: any;
	try {
		response = await axios.delete(`${API_ENDPOINT}/v1/words/${params.wordId}`, {
			headers: {
				Authorization: token,
			},
		});
	} catch (err: any) {
		response = err.response;
	}

	return json(response.data);
};

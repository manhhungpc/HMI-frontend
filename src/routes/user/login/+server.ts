import { API_ENDPOINT } from '$env/static/private';
import axios from 'axios';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const POST = (async ({ request }) => {
	const { email, password } = await request.json();
	let response: any;
	try {
		response = await axios.post(`${API_ENDPOINT}/v1/user/login`, { email, password });
		// console.log(response.status, response.data);
	} catch (err: any) {
		response = err.response;
		// console.log(err.response.data);
	}

	return json(response.data);
}) satisfies RequestHandler;

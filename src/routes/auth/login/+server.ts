import { API_ENDPOINT } from '$env/static/private';
import axios from 'axios';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const POST = (async ({ request }) => {
	const { email, password } = await request.json();
	const response = await axios.post(`${API_ENDPOINT}/auth/login`, { email, password });

	return json(response.data);
}) satisfies RequestHandler;

import { API_ENDPOINT } from '$env/static/private';
import axios from 'axios';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import type { LoginRequest } from 'src/request/LoginRequest';

export const POST = (async ({ request }) => {
	const req: LoginRequest = await request.json();
	const data = {
		username: req.username,
		email: req.email,
		password: req.password,
		role: req.role,
		avatar: req.avatar,
	};
	let response: any;
	try {
		response = await axios.post(`${API_ENDPOINT}/v1/user/register`, data);
		// console.log(response.status, response.data);
	} catch (err: any) {
		response = err.response;
		// console.log(err.response.data);
	}
	return json(response.data);
}) satisfies RequestHandler;

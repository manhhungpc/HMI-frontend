import { API_ENDPOINT } from '$env/static/private';
import axios from 'axios';
import { authHeader, decode } from 'src/utils/token';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

const user = JSON.parse(decode(localStorage.getItem('token') as string));

export const GET = (async () => {
	const projects = await axios.get(`${API_ENDPOINT}/user/${user._id}/projects`);

	console.log(json(projects));
	return json(projects);
}) satisfies RequestHandler;

export const POST = (async ({ request }) => {
	const data = await request.json();

	const response = await axios.post(`${API_ENDPOINT}/projects/user/${user._id}`, data, {
		headers: {
			authorization: `Bearer ${localStorage.getItem('token') as string}`,
		},
	});
	return json(response.data);
}) satisfies RequestHandler;

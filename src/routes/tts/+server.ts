import { API_ENDPOINT } from '$env/static/private';
import axios from 'axios';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ request, route, url }) => {
	const streamLink = `${API_ENDPOINT}/v1/tts/?q=${url.searchParams.get('q')}`;
	return json(streamLink);
};

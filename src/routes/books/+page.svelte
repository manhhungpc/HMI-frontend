<script lang="ts">
	import { getToken } from 'src/utils/token';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	const books = data;
	console.log(books);
	let title: string = '',
		content: string = '',
		authors: string[] = [],
		images: string[] = [],
		intro: string = '';

	const newBook = {
		title,
		content,
		authors,
		images,
		intro,
	};
	const getBooks = async () => {
		const res = await fetch('/books', {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				Authorization: getToken(),
			},
		});
		console.log(await res.json());
	};
	const onCreateBooks = async () => {
		const res = await fetch('/books', {
			method: 'POST',
			body: JSON.stringify(newBook),
			headers: {
				'content-type': 'form-encoded',
				Authorization: getToken(),
			},
		});
		console.log(await res.json());
	};
</script>

<h1>Book</h1>
<button type="button" on:click={onCreateBooks}>Create fake book</button>

<script lang="ts">
	import Header from './../../components/Header.svelte';
	import { getToken } from 'src/utils/token';
	import TitlePage from 'src/components/TitlePage.svelte';
	import BooksReview from 'src/components/BooksReview.svelte';
	import type { PageServerData } from './$types';
	import Taskbar from 'src/components/Taskbar.svelte';

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
				'content-type': 'form-encoded',
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

<!-- <h1>Book</h1>
<button type="button" on:click={onCreateBooks}>Create fake book</button> -->

<Header />
<TitlePage />
<div class="main-wrapper">
	<Taskbar />
	<BooksReview />
</div>

<style lang="scss">
	.main-wrapper {
		width: 100%;
		display: flex;
		flex-grow: 1;
		margin-top: 100px;
		overflow: hidden;
	}
	@media (max-width: 420px) {
		.main-wrapper {
			margin-top: 50px;
		}
	}
</style>

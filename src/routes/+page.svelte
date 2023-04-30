<script>
	// @ts-nocheck
	import TitlePage from './../components/TitlePage.svelte';
	import Header from 'src/components/Header.svelte';
	import BookSlide from 'src/components/BookSlide.svelte';
	import BooksReview from 'src/components/BooksReview.svelte';
	import Taskbar from 'src/components/Taskbar.svelte';
	import '../styles/global.scss';
	import '/src/styles/homepage.scss';
	import { getToken } from 'src/utils/token';

	let token = getToken();

	async function getAllBooks() {
		const res = await fetch('/books', {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				Authorization: token,
			},
		});

		const response = await res.json();
		console.log(response);
		return response.data;
	}
</script>

<svelte:head>
	<title>Story Online</title>
</svelte:head>

<Header />
{#await getAllBooks()}
	<h1>Loading ...</h1>
{:then books}
	<div class="book-store">
		<TitlePage />
		<BookSlide books={books.slice(0, 4)} />
		<div class="main-wrapper">
			<Taskbar />
			<BooksReview {books} />
		</div>
	</div>
{/await}

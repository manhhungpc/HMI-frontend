<script lang="ts">
	import TitlePage from 'src/components/TitlePage.svelte';
	import BooksReview from 'src/components/BooksReview.svelte';
	import Taskbar from 'src/components/Taskbar.svelte';
	import '/src/styles/homepage.scss';

	const token = localStorage.getItem('token') || '';

	async function getAllBooks() {
		const res = await fetch('/books', {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				Authorization: token as string,
			},
		});

		const response = await res.json();
		console.log(response);
		return response.data;
	}
</script>

{#await getAllBooks()}
	<h1 class="text-4xl flex items-center justify-center h-40">Loading ...</h1>
{:then books}
	<div class="book-store">
		<TitlePage />
		<div class="main-wrapper">
			<Taskbar />
			<BooksReview {books} />
		</div>
	</div>
{/await}

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

<script lang="ts">
	import { page } from '$app/stores';
	import { getToken } from 'src/utils/token';
	import '/src/styles/bookId.css';
	import LeftBookButton from 'src/components/LeftBookButton.svelte';
	import { onMount } from 'svelte';
	import RightBookButton from 'src/components/RightBookButton.svelte';

	const token: string = getToken();
	let selectedText: any = '',
		srcAudio = '';

	async function getBookData() {
		const res = await fetch(`/books/${$page.params.bookId}`, {
			method: 'GET',
			headers: {
				'content-type': 'form-encoded',
				Authorization: token,
			},
		});

		const response = await res.json();
		console.log(response);
		if (response.status !== 200) window.location.href = '/user/login';
		return response.data;
	}

	onMount(() => {
		if (token) {
			document.addEventListener(`selectionchange`, () => {
				selectedText = document.getSelection()?.toString();
			});
		}
	});

	async function streamAudio(body: string) {
		const res = await fetch(`/tts?q=${body}`, {
			method: 'GET',
			headers: {
				'content-type': 'form-encoded',
				Authorization: token,
			},
		});
		const response = await res.json();
		srcAudio = response;
		return response;
	}
</script>

<svelte:head>
	<title>TitleOfBook</title>
</svelte:head>

<div id="wrapper">
	<div class="main-wrapper">
		{#await getBookData()}
			<h1 class="text-4xl flex items-center justify-center h-40">Loading ...</h1>
		{:then book}
			<LeftBookButton streamAudio={() => streamAudio(selectedText)} {srcAudio} {selectedText} />
			<div id="container">
				<section class="open-book">
					<header>
						<h1>{book.title}</h1>
						<h6>{book.authors}</h6>
					</header>
					<article>
						{@html book.content.replace(/([^>\\r\\n]?)(\\r\\n|\\n\\r|\\r|\\n)/g, '<br/>')}
					</article>
					<footer>
						<ol id="page-numbers">
							<li>1</li>
							<li>2</li>
						</ol>
					</footer>
				</section>
			</div>
			<RightBookButton />
		{/await}
	</div>
</div>

<script lang="ts">
	import { page } from '$app/stores';
	import { getToken } from 'src/utils/token';
	import '/src/styles/bookId.css';
	import RightBookButton from 'src/components/RightBookButton.svelte';
	import { wordStore } from 'src/utils/store';

	import Modal, { bind } from 'svelte-simple-modal';
	import PopupWord from 'src/components/PopupWord.svelte';
	import LeftBookSentence from 'src/components/LeftBookSentence.svelte';
	const showModal = (word: string) => {
		wordStore.set(bind(PopupWord as any, { data: word }));
	};

	const token: string = getToken();

	async function getBookData() {
		const res = await fetch(`/books/${$page.params.bookId}/sentences`, {
			method: 'GET',
			headers: {
				'content-type': 'form-encoded',
				Authorization: token,
			},
		});

		const response = await res.json();
		console.log(response.data);
		if (response.status !== 200) window.location.href = '/user/login';

		return response.data;
	}

	async function streamAudio(body: string) {
		const res = await fetch(`/tts?q=${body}`, {
			method: 'GET',
			headers: {
				'content-type': 'form-encoded',
				Authorization: token,
			},
		});
		const response = await res.json();
		return response;
	}
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap"
		rel="stylesheet"
	/>
	<title>TitleOfBook</title>
</svelte:head>

<div id="wrapper">
	<div class="main-wrapper">
		{#await getBookData()}
			<h1>Loading ...</h1>
		{:then book}
			<LeftBookSentence bookSentences={book.sentences} />
			<Modal show={$wordStore}>
				<div id="container">
					<section class="open-book">
						<header>
							<h1>{book.title}</h1>
							<h6>{book.authors}</h6>
						</header>
						<article>
							{#each book.sentences as bookSentence}
								<span id="sentence_hightlight_{bookSentence._id}">
									{#each bookSentence.tokens as singleWord}
										{#if singleWord === 'break'}
											<br />
										{:else}
											<span class="single-word">
												<button on:click={() => showModal(singleWord)} style="margin-right: 5px">
													{singleWord}
												</button>
											</span>
										{/if}
									{/each}
								</span>
							{/each}
							<!-- {@html book.content.replace(/([^>\\r\\n]?)(\\r\\n|\\n\\r|\\r|\\n)/g, '<br/>')} -->
						</article>
						<footer>
							<ol id="page-numbers">
								<li>1</li>
								<li>2</li>
							</ol>
						</footer>
					</section>
				</div>
			</Modal>
			<RightBookButton />
		{/await}
	</div>
</div>

<style>
	.single-word:hover {
		background-color: rgba(222, 255, 0, 0.75);
		cursor: pointer;
	}
	.single-word {
		font-family: 'Quicksand', sans-serif;
		font-size: 18px;
	}
</style>

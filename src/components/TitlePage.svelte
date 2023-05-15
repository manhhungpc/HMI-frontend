<script lang="ts">
	import '../styles/TitlePage.scss';
	let query = '',
		booksQuery: any = [],
		open = false,
		loading = false;

	async function searchBooks() {
		console.log(query);
		loading = true;
		const res = await fetch(`/books?book=${query}`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			},
		});

		const response = await res.json();
		booksQuery = response.data;
		open = true;
		loading = false;
		console.log(response);
		return response.data;
	}
</script>

<div class="header">
	<div class="browse">
		<div class="browse-category">
			Xem các loại sách &nbsp;
			<i class="fa-solid fa-chevron-down" />&nbsp;
		</div>
		<div class="search-bar">
			<i class="fa-solid fa-magnifying-glass" />
			<input type="text" placeholder="Tìm kiếm gì đó ..." bind:value={query} />
			<button class="bg-pink-300 text-white px-3 py-2 rounded" on:click={searchBooks}>
				Tìm kiếm &nbsp;
				{#if loading}
					<i class="fa-solid fa-spinner fa-spin" />
				{:else}
					<i class="fa-solid fa-magnifying-glass" />
				{/if}
			</button>
			{#if open}
				<ul class="list-dropdown">
					{#each booksQuery as book}
						<a href="/books/{book._id}/sentences"><li>Sách: {book.title}</li></a>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</div>

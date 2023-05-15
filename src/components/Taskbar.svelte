<script lang="ts">
	import '../styles/TaskBar.scss';
	import { getToken } from 'src/utils/token';

	export let books: any = [];
	let token = getToken();
	let blank_avatar: string =
			'https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png',
		blank_book =
			'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';

	async function getAllAuthors() {
		const res = await fetch('/authors', {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				Authorization: token,
			},
		});
		try {
			const response = await res.json();
			return response.data;
		} catch (err) {
			throw new Error('Server error');
		}
	}
	// getAllAuthors();
</script>

<div class="books-of">
	<div class="week">
		<div class="author-title">Tác giả nổi bật</div>
		{#await getAllAuthors()}
			<h1 class="text-4xl flex items-center justify-center h-40">Loading ...</h1>
		{:then authors}
			{#each authors as author}
				<div class="author">
					<img
						src={author.images && author.images.length > 0 ? author.images[0] : blank_avatar}
						alt="Author-img"
						class="author-img"
					/>
					<div class="author-name">{author.name ? author.name : author.alias}</div>
				</div>
			{/each}
		{/await}
	</div>
	<div class="week">
		<div class="author-title">Các cuốn sách</div>
		{#each books as book}
			<div class="year-book">
				<img src={book.images[0] ? book.images[0] : blank_book} alt="" class="year-book-img" />
				<div class="year-book-content">
					<div class="font-bold">{book.title}</div>
					<div>bởi {book.authors[0] ? book.authors[0].name : 'Chưa có tác giả!'}</div>
				</div>
			</div>
		{/each}
	</div>
	<div class="overlay" />
</div>

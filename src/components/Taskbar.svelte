<script lang="ts">
	import '../styles/TaskBar.scss';
	import { getToken } from 'src/utils/token';

	let token = getToken();
	let blank_avatar: string =
		'https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png';

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
			console.log('AUTHOR', response);
			return response.data;
		} catch (err) {
			throw new Error('Server error');
		}
	}
	// getAllAuthors();
</script>

<div class="books-of">
	<div class="week">
		<div class="author-title">Author of the week</div>
		{#await getAllAuthors()}
			<h1>Loading ...</h1>
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
		<div class="author">
			<img
				src="https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
				alt=""
				class="author-img"
			/>
			<div class="author-name">Jonathan Doe</div>
		</div>
	</div>
	<div class="week">
		<div class="author-title">Books of the year</div>
		<div class="year-book">
			<img
				src="https://images-na.ssl-images-amazon.com/images/I/A1kNdYXw0GL.jpg"
				alt=""
				class="year-book-img"
			/>
			<div class="year-book-content">
				<div>Disappearing Earth</div>
				<div>by Julia Phillips</div>
			</div>
		</div>
		<div class="year-book">
			<img
				src="https://images-na.ssl-images-amazon.com/images/I/81eI0ExR+VL.jpg"
				alt=""
				class="year-book-img"
			/>
			<div class="year-book-content">
				<div class="year-book-name">Lost Children Archive</div>
				<div class="year-book-author">by Valeria Luiselli</div>
			</div>
		</div>
		<div class="year-book">
			<img
				src="https://images-na.ssl-images-amazon.com/images/I/81OF9eJDA4L.jpg"
				alt=""
				class="year-book-img"
			/>
			<div class="year-book-content">
				<div class="year-book-name">Phantoms: A Thriller</div>
				<div class="year-book-author">by Dean Koontz</div>
			</div>
		</div>
		<div class="year-book">
			<img src="https://m.media-amazon.com/images/I/515FWPyZ-5L.jpg" alt="" class="year-book-img" />
			<div class="year-book-content">
				<div class="year-book-name">Midnight in Chernobyl</div>
				<div class="year-book-author">by Adam Higginbotham</div>
			</div>
		</div>
		<div class="year-book">
			<img
				src="https://images-na.ssl-images-amazon.com/images/I/91dBtgERNUL.jpg"
				alt=""
				class="year-book-img"
			/>
			<div class="year-book-content">
				<div class="year-book-name">10 Minutes 38 Seconds</div>
				<div class="year-book-author">by Elif Shafak</div>
			</div>
		</div>
	</div>
	<div class="overlay" />
</div>

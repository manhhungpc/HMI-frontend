<script lang="ts">
	import '../styles/BookReview.scss';
	export let books: any = [];

	function getRandomStar(min: number, max: number) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
</script>

<div class="popular-books">
	<div class="main-menu">
		<div class="popular">Các đầu sách / truyện</div>
		<div class="book-types">
			<button class="book-type active"> Tất cả</button>
		</div>
	</div>
	<div class="book-cards">
		{#each books as book}
			<div
				class="book-card"
				on:mouseup={() => (window.location.href = `/books/${book._id}/sentences`)}
			>
				<div class="content-wrapper">
					<img src={book.images[0]} alt="Book" class="book-card-img" />
					<div class="card-content">
						<div class="book-name">{book.title}</div>
						{#each book.authors as author}
							<div class="book-by">{author.name ? author.name : author.alias}</div>
						{/each}
						<div class="rate">
							<span class="rating book-rate">
								{#each { length: getRandomStar(3, 5) } as _}
									<i class="fa-solid fa-star" />
								{/each}
							</span>
							<span class="book-voters card-vote">{book.likes} likes</span>
						</div>
						<div class=" card-sum">
							{book.intro ? book.intro : 'Không có intro đâu, bruh ._.'}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

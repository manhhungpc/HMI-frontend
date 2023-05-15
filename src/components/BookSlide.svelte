<script lang="ts">
	//@ts-ignore
	import Carousel from 'svelte-carousel';
	import '../styles/BookSlide.scss';

	export let books: any = [];
	console.log(books);
	function getRandomStar(min: number, max: number) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
</script>

<div class="book-slide">
	<Carousel autoplay autoplayDuration={4000}>
		{#each books as book}
			<div class="book-cell">
				<div class="book-img">
					<img src={book.images[0]} alt="Book-img" class="book-photo" />
				</div>
				<div class="book-content">
					<div class="book-title">{book.title}</div>
					{#each book.authors as author}
						<div class="book-author">by {author.name}</div>
					{/each}
					<div class="rate">
						<span class="rating">
							{#each { length: getRandomStar(3, 5) } as _}
								<i class="fa-solid fa-star" />
							{/each}
						</span>
						<span class="book-voters">{book.views} lượt xem</span>
					</div>
					<div class="book-sum">
						{book.intro ? book.intro : 'Không có tóm tắt!'}
					</div>
					<button
						class="book-see"
						on:click={() => (window.location.href = `/books/${book._id}/sentences`)}
					>
						See The Book
					</button>
				</div>
			</div>
		{/each}
	</Carousel>
</div>

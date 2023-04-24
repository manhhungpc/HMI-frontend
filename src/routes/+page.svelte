<script>
	import TitlePage from './../components/TitlePage.svelte';
	import Header from 'src/components/Header.svelte';
	import BookSlide from 'src/components/BookSlide.svelte';
	import BooksReview from 'src/components/BooksReview.svelte';
	import Taskbar from 'src/components/Taskbar.svelte';
	import '../styles/global.css';
	import '/src/styles/homepage.scss';
</script>

<svelte:head>
	<title>Story Online</title>
</svelte:head>


<Header />
<div class="book-store">
	<TitlePage />
	<BookSlide />
	<div class="main-wrapper">
		<Taskbar />
		<BooksReview />
	</div>
</div>
<script>
	import Header from 'src/components/Header.svelte';
	import '../styles/global.css';
</script>

<head>
	<title>Storyline Online</title>
	<!-- <link rel="stylesheet" type="text/css" href="style.css"> -->
</head>
<body>
	<Header />
	<!-- <header>
		<div class="logo">
			<img src="src\routes\images\logo.png" alt="Storyline Online Logo" />
		</div>
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/books">Books</a></li>
				<li><a href="/authors">Authors</a></li>
				<li>
					<a href="/user/register">Register</a>
				</li>
				<li>
					<a href="/user/login">Login</a>
				</li>
			</ul>
		</nav>
	</header> -->
	<main>
		<section class="book-list">
			<h2>Featured Books</h2>
			<ul>
				<li>
					<a href="#">
						<img
							src="https://vnkings.com/wp-content/uploads/2017/06/c2d886856e0c56a9f7eba028ad46a50c.jpg"
							alt="Book 1"
						/>
						<h3>Book Title 1</h3>
						<p>Author Name</p>
					</a>
				</li>
				<li>
					<a href="#">
						<img
							src="https://diendanlequydon.com/downloads/image_prv/105/104473.jpg"
							alt="Book 2"
						/>
						<h3>Book Title 2</h3>
						<p>Author Name</p>
					</a>
				</li>
				<li>
					<a href="#">
						<img
							src="https://img.wattpad.com/e76499fa08b7235e643e7bd7a011a44f3b8d01b5/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f2d746c634e3864454c30327543673d3d2d3431323432343539382e313464346534373032313462613831323539343638303938383530322e6a7067?s=fit&w=720&h=720"
							alt="Book 3"
						/>
						<h3>Book Title 3</h3>
						<p>Author Name</p>
					</a>
				</li>
			</ul>
		</section>
		<section class="video">
			<h2>Watch a Story</h2>
			<div class="video-player">
				<!-- <iframe
					src="https://filmora.wondershare.com/video-editor/best-free-open-source-video-editors.html"
				/> -->
			</div>
			<div class="video-info">
				<h3>Book Title</h3>
				<p>Author Name</p>
				<a href="/about" class="button">Read the Book</a>
			</div>
		</section>
	</main>
	<footer>
		<nav>
			<ul>
				<li><a href="#">Privacy Policy</a></li>
				<li><a href="#">Terms of Use</a></li>
				<li><a href="#">FAQ</a></li>
			</ul>
		</nav>
		<p>&copy; 2021 Storyline Online. All rights reserved.</p>
	</footer>
</body>

<style>
	body {
		font-family: Arial, sans-serif;
		margin: 0;
		padding: 0;
	}

	nav ul {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav ul li {
		margin-left: 20px;
	}

	nav ul li:first-child {
		margin-left: 0;
	}

	nav ul li a {
		color: #333;
		text-decoration: none;
	}

	nav ul li a:hover {
		text-decoration: underline;
	}

	main {
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px;
	}

	.book-list ul {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	/* .book-list li {
    width: 33.33%;
    padding: 20px;
    } */

	.book-list li a {
		display: block;
		text-decoration: none;
		color: #333;
	}

	.book-list li a:hover {
		text-decoration: underline;
	}

	.book-list h3 {
		font-size: 1.2rem;
		margin: 10px 0 5px 0;
	}

	.book-list p {
		margin: 0;
	}

	.book-list img {
		height: 400px;
		/* width: 500px; */
		object-fit: cover;
	}

	.video {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 50px;
	}

	.video h2 {
		width: 100%;
	}

	.video-player {
		flex-basis: 60%;
	}

	.video-player iframe {
		width: 100%;
		height: 400px;
	}

	.video-info {
		flex-basis: 35%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.video-info h3 {
		font-size: 1.2rem;
		margin-top: 0;
	}

	.video-info p {
		margin-bottom: 10px;
	}

	.button {
		background-color: #f00;
		color: #fff;
		padding: 10px 20px;
		text-decoration: none;
		text-transform: uppercase;
	}

	.button:hover {
		background-color: #d00;
	}

	footer {
		background-color: #333;
		color: #fff;
		padding: 20px;
		text-align: center;
	}

	footer nav {
		margin-bottom: 20px;
	}

	footer nav ul {
		display: flex;
		justify-content: center;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	footer nav ul li {
		margin-right: 20px;
	}

	footer nav ul li:last-child {
		margin-right: 0;
	}

	footer nav ul li a {
		color: #fff;
		text-decoration: none;
	}

	footer nav ul li a:hover {
		text-decoration: underline;
	}
</style>

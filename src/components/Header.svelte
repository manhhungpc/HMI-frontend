<header>
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
</header>

<style>
	header {
		background-color: #fff;
		border-bottom: 1px solid #ccc;
		display: flex;
		justify-content: space-between;
		padding: 20px;
	}

	.logo img {
		height: 50px;
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
</style>

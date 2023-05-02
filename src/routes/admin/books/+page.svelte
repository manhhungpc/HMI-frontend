<script lang="ts">
	import Header from './../../../components/Header.svelte';
	let title: string = '',
		content: string = '',
		authors: string[] = [],
		images: string[] = [],
		intro: string = '';

	const newBook = {
		title,
		content,
		authors,
		images,
		intro,
	};
	const onCreateBooks = async () => {
		const res = await fetch('/books', {
			method: 'POST',
			body: JSON.stringify(newBook),
			headers: {
				'content-type': 'form-encoded',
			},
		});
		console.log(await res.json());
	};
</script>

<Header />
<nav class="navigation">
	<ul class="main">
		<li class="dashboard"><a href="/">Homepage</a></li>
		<li class="update"><a href="#"><i class="fa-solid fa-file-circle-plus" /> Add Book</a></li>
		<li class="update"><a href="#"><i class="fa-solid fa-pen-to-square" /> Update Book</a></li>
		<li class="delete"><a href="#"><i class="fa-solid fa-trash-can" /> Delete Book</a></li>
		<li class="home"><a href="#">Manage Users</a></li>
	</ul>
</nav>
<main>
	<section class="panel important">
		<h2>Write a story</h2>
		<form action="/" method="post">
			<div class="twothirds">
				Story title:<br />
				<input type="text" name="title" size="40" /><br />
				Authors:<br />
				<input type="text" name="title" size="40" /><br /><br />
				Review:<br />
				<textarea name="newstext" rows="5" cols="67" /><br />
				Content:<br />
				<textarea name="newstext" rows="15" cols="67" /><br />
				<input type="submit" name="submit" value="Save" />
			</div>
		</form>
	</section>
</main>

<style>
	.navigation li {
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
	}
	.navigation li a {
		color: #ddd;
		text-decoration: none;
		display: block;
		padding: 0.7em;
	}
	.navigation li a:hover {
		background-color: rgba(255, 255, 255, 0.05);
	}

	/* current nav item */
	.dashboard .dashboard a,
	.delete .delete a,
	.update .update a,
	.home .home a {
		background-color: rgba(255, 255, 255, 0.1);
	}

	/* panels */
	.panel {
		background-color: white;
		color: darkslategray;
		-webkit-border-radius: 0.3rem;
		-moz-border-radius: 0.3rem;
		-ms-border-radius: 0.3rem;
		border-radius: 0.3rem;
		margin: 1%;
	}
	.panel > h2 {
		margin: 1rem;
	}

	/* typography */
	a {
		text-decoration: none;
		color: inherit;
	}

	h2 {
		font-weight: 300;
		margin: 0;
	}

	h2 {
		color: #ff1a1a;
	}

	/* lists */
	ul,
	li {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	/* forms */
	form input,
	form textarea {
		width: 100%;
		display: block;
		border: solid 1px #dde;
		padding: 0.5em;
	}
	form input:after,
	form textarea:after {
		content: '';
		display: table;
		clear: both;
	}

	form input[type='submit'] {
		background: #ff1a1a;
		border: none;
		border-bottom: solid 4px #e60000;
		padding: 0.7em 3em;
		margin: 1em 0;
		color: white;
		text-shadow: 0 -1px 0 #e60000;
		font-size: 1.1em;
		font-weight: bold;
		display: inline-block;
		width: auto;
		-webkit-border-radius: 0.5em;
		-moz-border-radius: 0.5em;
		-ms-border-radius: 0.5em;
		border-radius: 0.5em;
	}
	form input[type='submit']:hover {
		background: turquoise;
		border: none;
		border-bottom: solid 4px #21ccbb;
		padding: 0.7em 3em;
		margin: 1em 0;
		color: white;
		text-shadow: 0 -1px 0 #21ccbb;
		font-size: 1.1em;
		font-weight: bold;
		display: inline-block;
		width: auto;
		-webkit-border-radius: 0.5em;
		-moz-border-radius: 0.5em;
		-ms-border-radius: 0.5em;
		border-radius: 0.5em;
	}

	@media screen and (min-width: 600px) {
		.navigation {
			position: absolute;
			width: 200px;
			height: 137%;
			background: #2a3542;
			color: #ddd;
		}

		main {
			margin-left: 200px;
		}
		main:after {
			content: '';
			display: table;
			clear: both;
		}

		.panel {
			margin: 2% 0 0 2%;
			float: left;
			width: 96%;
		}
		.panel:after {
			content: '';
			display: table;
			clear: both;
		}

		.twothirds {
			padding: 1rem;
		}

		.twothirds {
			width: 80%;
			float: left;
		}
	}
	@media screen and (min-width: 900px) {
		.panel {
			width: 47%;
			clear: none;
		}
		.panel.important {
			width: 96%;
		}
	}
</style>

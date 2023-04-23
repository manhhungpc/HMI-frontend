<script lang="ts">
	import { page } from '$app/stores';
	import { getToken } from 'src/utils/token';
	import '/src/styles/bookId.css';
	console.log($page.params);

	// const token: string = getToken();
	const token: string = '';
	const fakeData = {
		title: 'Boooksss blanak ',
		content:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium nostrum odit reiciendis suscipit distinctio numquam nulla ea fuga, sapiente mollitia expedita debitis id, consequuntur eaque ipsa nisi quis, cum commodi?',
		authors: [],
		images: [
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=',
		],
		intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, aliquid!',
	};
	const onUpdateBook = async () => {
		const res = await fetch(`/books/${$page.params.bookId}`, {
			method: 'PUT',
			body: JSON.stringify(fakeData),
			headers: {
				'content-type': 'form-encoded',
				Authorization: token,
			},
		});
		console.log(await res.json());
	};
	const onDeleteBook = async () => {
		const res = await fetch(`/books/${$page.params.bookId}`, {
			method: 'DELETE',
			headers: {
				'content-type': 'form-encoded',
				Authorization: token,
			},
		});
		console.log(await res.json());
	};
</script>

<svelte:head>
	<title>TitleOfBook</title>
</svelte:head>

<div id="wrapper">
	<div id="container">
		<section class="open-book">
			<header>
				<h1>Book Layout</h1>
				<h6>Erin E. Sullivan</h6>
			</header>
			<article>
				<h2 class="chapter-title">Waiting on projects</h2>
				<p>
					Sublime Text 2 was opened and a new document was created. "I love this time of year," Erin
					gleefully thought to herself.
				</p>
				<p>
					The "time of year" that is being referenced relates to Erin's job when the pile of
					projects temporarily slow down. This doesn't happen to just her. The reduction of work
					happens to many, but at various times throughout the year, depending on their position.
					She could submit to boredom and brainlessly surf the Internet, but this particular
					developer decided to take advantage of the situation.
				</p>
				<p>
					Erin brainstorms on ideas that are both fun and can strengthen her development skills.
					After all, however she spends her free time at work should be used in a way that becomes
					helpful for future projects.
				</p>
				<p>
					She already made quite the effort into fine-tuning her skills with Flexbox, creating
					functional and accessible code for an <a
						href="https://codepen.io/erinesullivan/pen/LLoXoL">organizational chart</a
					>
					and a <a href="https://codepen.io/erinesullivan/pen/MvOdOE">process chart</a>. For Erin's
					next personal project, she wanted something different. Something with multiple (yet
					possibly useful) features.
				</p>
				<p>
					To <a href="https://codepen.io/">CodePen.io</a> she went, but not brainlessly! Erin "Oohed"
					and "Ahhed" at the recently picked pens. She envied the skills of those using compilers she
					has yet to dabble in. Then she put together a list of what she would like to achieve.
				</p>
				<p>
					Erin chuckled to herself, "This sounds crazy, but what if I develop a section of text that
					looks like a book?"
				</p>
				<p>
					She paused, realizing that what she was about to do was a trend years ago. This severely
					increased the chance of her project being mocked after launch. What was the specific trend
					Erin remembered? Skeuomorphism.
				</p>
				<dl>
					<dt><strong>skeu&bull;o&bull;morph</strong></dt>
					<dd>
						<em>noun</em><br />
						an object or feature that imitates the design of a similar artifact made from another material.
					</dd>
				</dl>
				<p>
					Outside of skeuomorphism, the idea actually was not very silly. Erin always had an
					appreciation towards print work. The thought of mimicking similar designs onto a web
					interface has always fascinated her. So, why not start with the classic print design of a
					novel?
				</p>
				<p>She began to jot down a list of elements that are typically in a novel:</p>
				<ul>
					<li>Serif typefaces</li>
					<li>
						Header area with the title of the book on the left, and the author of said book on the
						right. <em
							>Erin is aware that content within the header of the same page as a chapter title does
							not appear, but she made an exception</em
						>.
					</li>
					<li>An adorned chapter title</li>
					<li>A dropcap for the first letter of the first paragraph of the chapter</li>
					<li>Indented paragraphs</li>
					<li>Page numbers</li>
				</ul>
				<p>
					She was then picturing herself making marks on a novel like she used to in school. In her
					true fashion, she got carried away with "What ifs."
				</p>
				<ul>
					<li>
						"What if highlighting the text actually looked <mark>like a highlighter</mark>?"
						<ul>
							<li>"What if I wanted it to be <mark class="pink">pink</mark>?"</li>
							<li>"<mark class="blue">Blue</mark>?"</li>
							<li>"<mark class="green">Green</mark>?"</li>
							<li>"<mark class="orange">Orange</mark>?"</li>
						</ul>
					</li>
					<li>
						"What if I found <s>a typo</s><sup>an error in the content</sup> and wanted to make a correction?"
					</li>
					<li>"What if I was viewing this on mobile&mdash;"</li>
				</ul>
				<p>
					The true obstacle showed its form. Responsiveness. How on Earth will she make this work?
				</p>
				<p>
					Erin pulled out her notepad and started sketching. First she began to illustrate the
					wireframe of the book in its entirety. Then she recorded some notes on how each element
					would break down as the screen size got smaller. After several minutes, the blueprint was
					complete. She came to the conclusion that mobile viewing must stay minimal. The pages go
					away, which makes the page numbers no longer have a function so they must go away, and if
					those go away then there is no need for a cover since it is used to help hold and protect
					pages.
				</p>
				<p>
					She looks back at the blinking cursor of her blank canvas in Sublime Text 2. Doubt begins
					to linger in the back of her mind with the thought of her new code never being used and
					her time spent ends up being a waste. Her fingers were typing anyway.
				</p>
				<p>Erin smirked, "Well at least I think it's worth a try."</p>
			</article>
			<footer>
				<ol id="page-numbers">
					<li>1</li>
					<li>2</li>
				</ol>
			</footer>
		</section>
	</div>
</div>

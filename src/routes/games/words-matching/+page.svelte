<div class="wrapper">
	<h1 class="title">Shiii! Hãy lắng nghe thật kĩ nhé...<span>💬</span></h1>
	<button class="button-start">Start Game</button>
	<button class="button-scores">High Scores</button>
	<div class="game-info">
		<span />
		<span class="current-score">Score: <span class="score" /></span>
		<span class="time-left">Time left: <span class="timer" /></span>
	</div>
	<div id="container">
		<div id="info" />
	</div>
	<div class="words">
		<div class="words">
			<span class="rural">rural</span>
			<span class="sixth">sixth</span>
			<span class="choir">choir</span>
			<span class="plural">plural</span>
			<span class="memoir">memoir</span>
			<span class="albeit">albeit</span>
			<span class="colonel">colonel</span>
			<span class="penguin">penguin</span><span class="isthmus">isthmus</span>
			<span class="anemone">anemone</span>
			<span class="draught">draught</span><span class="brewery">brewery</span>
			<span class="liaison">liaison</span>
			<span class="beguile">beguile</span><span class="squirrel">squirrel</span>
		</div>
	</div>
	<div id="btn-container"><button id="btn">Next</button></div>
</div>

<style>
	.wrapper {
		/* position: relative; */
		min-height: 100vh;
		text-align: center;
		margin: 0;
		/* added to prevent x-scroll when (.words span.got) size increases from transform: scale */
		overflow-x: hidden;
		font-size: 1rem;
		line-height: 1.5;
		background-color: #ffffff;
		background-image: url('/bg_game.jpg');
		background-attachment: fixed;
		background-size: cover;
	}

	/* button {
		color: white;
		background: var(--red);
		padding: 1rem;
		border: 2px solid var(--black);
		border-radius: 5px;
		text-decoration: none;
		font-weight: 600;
		font-size: clamp(1rem, 1vw + 1rem, 1.5rem);
		transition: transform 0.2s;
	}

	button:hover {
		transform: scale(1.1);
	} */

	:focus {
		outline-color: var(--black);
	}

	.title {
		color: var(--black);
		margin-top: 0;
		line-height: 1;
		font-size: clamp(1.5rem, 2vw + 1.6rem, 4rem);
		margin: 5rem 0 3rem 0;
		position: relative;
	}

	.title span {
		position: absolute;
		bottom: clamp(0.75rem, 2vw + 1.3rem, 2rem);
	}

	.game-info {
		font-size: clamp(1rem, 1vw + 1rem, 2rem);
		font-weight: 600;

		/* padding: 2rem; */
		display: grid;
		grid-template-columns: 15% auto auto 15%;
	}

	.time-left,
	.current-score {
		background: var(--grey);
	}

	.current-score {
		border-radius: 10px 0 0 10px;
	}

	@media (max-width: 750px) {
		.game-info {
			grid-template-columns: 1fr 150px 150px;
		}
	}

	.words {
		display: flex;
		flex-wrap: wrap;
		margin: 5vw;
	}

	.words span {
		color: var(--black);
		flex: 1;
		padding: 1rem;
		margin: 0.25rem;
		font-size: clamp(0.9rem, 1.1vw + 0.7rem, 3rem);
		font-weight: 900;
		background: var(--green);
		border-radius: 10px;
		box-shadow: var(--box-shadow);
	}

	.button-start,
	.button-scores {
		margin: 0.5rem 0.5rem;
	}

	#container {
		display: flex;
		flex-direction: column;
	}

	#container {
		width: 600px;
		margin: 15px auto;
		text-align: center;
		justify-content: space-between;
		align-items: center;
	}

	#btn:hover {
		cursor: pointer;
	}

	#info {
		border: 1px solid black;
		width: 100%;
		height: 55px;
		border-radius: 10px;
		background-color: rgba(144, 238, 144, 0.632);
		box-shadow: 1px 1px 5px 1px #aaa;
		overflow: hidden;
	}

	#btn-container {
		height: 90px;
		bottom: 0px;
	}

	#btn {
		width: 130px;
		height: 70px;
		margin: 0px auto;
		border: none;
		border-radius: 20%;
		background-color: rgb(1, 162, 216);
		z-index: 12;
	}

	#btn:focus {
		border: none;
		outline: none;
	}

	@media only screen and (max-width: 600px) {
		#container {
			margin-top: 5px;
			width: 300px;
		}

		#info {
			margin-top: 5px;
			margin-bottom: 25px;
		}
	} /* end of media query */

	.button-start,
	.button-scores {
		color: #ffffff;
		background: #fb4560;
		padding: 1rem;
		border: 2px solid #000000;
		border-radius: 5px;
		text-decoration: none;
		font-weight: 600;
		font-size: clamp(1rem, 1vw + 1rem, 1.5rem);
		transition: transform 0.2s;
		font-family: inherit;
		line-height: 1.15;
	}
	.words span {
		color: #000000;
		flex: 1;
		padding: 1rem;
		margin: 0.25rem;
		font-size: clamp(0.9rem, 1.1vw + 0.7rem, 3rem);
		font-weight: 900;
		background: #14f0949c;
		border-radius: 10px;
		box-shadow: var(--box-shadow);
	}
</style>

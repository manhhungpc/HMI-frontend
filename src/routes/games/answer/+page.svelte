<div class="wrapper">
	<h1 class="title">
		Hãy tìm "từ" đúng!
		<i class="fa-solid fa-lightbulb fa-bounce" style="color: #ffeb0f;" />
	</h1>
	<button class="button-start">Start Game</button>
	<button class="button-scores">High Scores</button>
	<div class="game-info">
		<span />
		<span class="current-score">Score: <span class="score" /></span>
		<span class="time-left">Time left: <span class="timer" /></span>
	</div>
	<div id="container">
		<div id="info">
			<span class="question">Chó là ..., bạn cũng vậy!</span>
		</div>
	</div>
	<div class="words">
		<div class="grid">
			<span class="A">đồ ăn</span>
			<span class="B">súc vật</span>
			<span class="C">thú cưng</span>
			<span class="D">tất cả các đáp án đều đúng</span>
		</div>
	</div>
	<!-- <div id="btn-container"><button id="btn">Next</button></div> -->
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
		height: 100px;
		border-radius: 10px;
		background-color: rgba(144, 238, 144, 0.632);
		box-shadow: 1px 1px 5px 1px #aaa;
		overflow: hidden;
		display: flex;
	justify-content: center;
	align-items: center;
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
		border-radius: 10px;
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
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 2rem;
		padding: 0 2rem;
	}
	.words {
		display: flex;
		justify-content: center;
	}

	.question {
		color: #000000;
		font-size: clamp(0.9rem, 1.1vw + 0.7rem, 3rem);
		font-weight: 900;
		border-radius: 10px;
	}
	#btn {
		color: #000000;
		font-size: clamp(0.9rem, 1.1vw + 0.7rem, 3rem);
		font-weight: 500;
		border-radius: 10px;
	}
</style>

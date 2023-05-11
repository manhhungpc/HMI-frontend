<body>
	<h1>Shiii! Hãy lắng nghe thật kĩ nhé...<span>💬</span></h1>
	<button class="button-start">Start Game</button>
	<button class="button-scores">High Scores</button>
	<div class="game-info">
		<span />
		<span class="current-score">Score: <span class="score" /></span>
		<span class="time-left">Time left: <span class="timer" /></span>
	</div>
	<div id="container">
		<div id="info" />
		<div id="btn-container"><button id="btn">Next</button></div>
	</div>
	<div class="words">
		<div class="words">
			<span class="rural">rural</span><span class="sixth">sixth</span><span class="choir"
				>choir</span
			><span class="plural">plural</span><span class="memoir">memoir</span><span class="albeit"
				>albeit</span
			><span class="colonel">colonel</span><span class="penguin">penguin</span><span class="isthmus"
				>isthmus</span
			><span class="anemone">anemone</span><span class="draught">draught</span><span class="brewery"
				>brewery</span
			><span class="liaison">liaison</span><span class="beguile">beguile</span><span
				class="squirrel">squirrel</span
			><span class="specific">specific</span><span class="poignant">poignant</span><span
				class="unctuous">unctuous</span
			><span class="regularly">regularly</span><span class="psoriasis">psoriasis</span><span
				class="aluminium">aluminium</span
			><span class="laodicean">laodicean</span><span class="bourgeois">bourgeois</span><span
				class="phenomenon">phenomenon</span
			><span class="obsequious">obsequious</span><span class="onomatopoeia">onomatopoeia</span><span
				class="bezlotoxumab">bezlotoxumab</span
			><span class="phenylalanine">phenylalanine</span><span class="worcestershire"
				>worcestershire</span
			><span class="sesquipedalian">sesquipedalian</span><span class="otorhinolaryngologist"
				>otorhinolaryngologist</span
			><span class="otorhinolaryngological">otorhinolaryngological</span><span
				class="rhombicosidodecahedron">rhombicosidodecahedron</span
			><span class="supercalifragilisticexpialidocious">supercalifragilisticexpialidocious</span>
		</div>
	</div>
</body>

<style>
	/* normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
	button {
		overflow: visible;
	}
	body {
		margin: 0;
	}
	h1 {
		font-size: 2em;
		margin: 0.67em 0;
	}
	button {
		font-family: inherit;
		font-size: 100%;
		line-height: 1.15;
		margin: 0;
	}
	button {
		text-transform: none;
	}
	button {
		-webkit-appearance: button;
	}
	button::-moz-focus-inner {
		border-style: none;
		padding: 0;
	}
	button:-moz-focusring {
		outline: ButtonText dotted 1px;
	}
	::-webkit-file-upload-button {
		-webkit-appearance: button;
		font: inherit;
	}

	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	body {
		position: relative;
		min-height: 100vh;
		text-align: center;
		margin: 0;
		/* added to prevent x-scroll when (.words span.got) size increases from transform: scale */
		overflow-x: hidden;
		font-size: 1rem;
		line-height: 1.5;
		background-color: #ffffff;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='0.68' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='rotate(180 1000 750) scale(17.6) translate(-943.18 -707.39)'%3E%3Cuse fill='%23fafafa' href='%23s' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='2'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='rotate(180 1000 750) scale(17.6) translate(-943.18 -707.39)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='rotate(180 1000 750) scale(17.6) translate(-943.18 -707.39)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='rotate(180 1000 750) scale(17.6) translate(-943.18 -707.39)'%3E%3Cg fill='%23e5e5e5'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='rotate(180 1000 750) scale(17.6) translate(-943.18 -707.39)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23e0e0e0'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='rotate(180 1000 750) scale(17.6) translate(-943.18 -707.39)'%3E%3Cg fill='%23fefefe'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='rotate(180 1000 750) scale(17.6) translate(-943.18 -707.39)'%3E%3Cg fill='%23fefefe'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='rotate(180 1000 750) scale(17.6) translate(-943.18 -707.39)'%3E%3Cg fill='%23fefefe'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
		/* background by SVGBackgrounds.com */
		background-attachment: fixed;
		background-size: cover;
	}

	body::-webkit-scrollbar {
		width: 16px;
	}
	body::-webkit-scrollbar-track {
		background: #000;
	}
	body::-webkit-scrollbar-thumb {
		background-color: var(--red);
		border-radius: 6px;
	}

	button {
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
	}

	:focus {
		outline-color: var(--black);
	}

	h1 {
		color: var(--black);
		margin-top: 0;
		line-height: 1;
	}

	h1 {
		font-size: clamp(1.5rem, 2vw + 1.6rem, 4rem);
		margin: 5rem 0 3rem 0;
		position: relative;
	}

	h1 span {
		position: absolute;
		bottom: clamp(0.75rem, 2vw + 1.3rem, 2rem);
	}

	.game-info {
		font-size: clamp(1rem, 1vw + 1rem, 2rem);
		font-weight: 600;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		padding: 0.5rem;
		opacity: 0;
		display: grid;
		grid-template-columns: 1fr 200px 200px;
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

	button:hover {
		cursor: pointer;
		transition: all 0.5s;
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

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
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
		position: absolute;
		z-index: 10;
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

	button {
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

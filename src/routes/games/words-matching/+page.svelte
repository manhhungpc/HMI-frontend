<script lang="ts">
	import 'src/styles/gameMatching.css';
	import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';

	enum PlayState {
		start = 2,
		end = 1,
		over = 0,
	}
	let token = localStorage.getItem('token') as string;
	let questionArr: string[] = [],
		trueAswer: string[] = [],
		answerArr: string[] = [],
		playState: PlayState = PlayState.end,
		err = '',
		score = 0;

	function shuffleArray(array: string[]) {
		let shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = shuffled[i];
			shuffled[i] = shuffled[j];
			shuffled[j] = temp;
		}
		return shuffled;
	}

	async function getRandomQuestion() {
		const res = await fetch(`/games/words-matching`, {
			method: 'GET',
			headers: {
				'content-type': 'form-encoded',
				Authorization: token,
			},
		});

		const response = await res.json();
		console.log(response);
		if (response.status !== 200) window.location.href = '/';
		trueAswer = response.data.tokenize;
		questionArr = shuffleArray(response.data.tokenize);
		return response.data;
	}

	async function startPlaying() {
		if (playState === PlayState.over) {
			answerArr = [];
			trueAswer = [];
			questionArr = [];
			await getRandomQuestion();
		}
		err = '';
		score = 0;
		playState = PlayState.start;
	}

	function addToAnswer(index: number) {
		answerArr = [...answerArr, questionArr[index]];
		questionArr.splice(index, 1);
		questionArr = questionArr;
	}

	function removeFromAnswer(index: number) {
		questionArr = [...questionArr, answerArr[index]];
		answerArr.splice(index, 1);
		answerArr = answerArr;
	}

	async function sendAnswer(id: string, answer: string[]) {
		console.log(answer, trueAswer);
		err = '';
		let correct =
			answer.length === trueAswer.length && answer.every((value, i) => value === trueAswer[i]);
		// if (answer === trueAswer) correct = true;
		const res = await fetch(`/games/words-matching`, {
			method: 'POST',
			body: JSON.stringify({ sentenceId: id, correct: correct }),
			headers: {
				'content-type': 'form-encoded',
				Authorization: token,
			},
		});

		const response = await res.json();
		if (response.status === 403) {
			window.location.href = '/user/login';
		}
		if (response.status === 400) {
			err = 'Đáp án của bạn không đúng!';
			return;
		}
		console.log(response);
		if (correct === false) {
			toasts.add({
				title: 'Kết quả chưa đúng 😥',
				description: 'Cố gắng hơn ở lần sau nhé!',
				duration: 3000, // 0 or negative to avoid auto-remove
				showProgress: true,
				placement: 'top-right',
				type: 'error',
				theme: 'dark',
			});
		} else {
			score++;
			toasts.add({
				title: 'Đáp án đúng 😍',
				description: 'Xin chúc mừng!',
				duration: 3000, // 0 or negative to avoid auto-remove
				showProgress: true,
				placement: 'top-right',
				type: 'success',
				theme: 'dark',
			});
		}
		answerArr = [];
		await getRandomQuestion();
		return;
	}
</script>

<div class="wrapper-game">
	{#await getRandomQuestion()}
		<p>Đang lấy câu hỏi ...</p>
	{:then question}
		<ToastContainer placement="top-right" let:data>
			<FlatToast {data} />
		</ToastContainer>
		<h1 class="title-game">Hãy sắp xếp câu sau thành câu đúng và có nghĩa</h1>
		<button class="button-start" on:click={startPlaying}>Bắt đầu</button>
		<button class="button-scores" on:click={() => (playState = PlayState.over)}>Kết thúc</button>
		<div class="game-info">
			<span />
			<span class="current-score">Điểm: {score}</span>
			{#if playState === PlayState.over}
				<span class="time-left" style="color: #fb4560;">Kết thúc!</span>
			{/if}
		</div>
		{#if err}
			<div style="color: #fb4560; font-weight: 700;">
				{err}
			</div>
		{/if}

		<div id="container-game">
			<div id="box-game" />
			<div class="wrapper-answer">
				{#each answerArr as answer, i}
					<button class="answer-info" on:click={() => removeFromAnswer(i)}>{answer}</button>
				{/each}
			</div>
		</div>
		{#if playState === PlayState.start}
			<div class="words">
				{#each questionArr as sentence, i}
					<button on:click={() => addToAnswer(i)}>
						{sentence}
					</button>
				{/each}
			</div>
			<button id="btn-next" on:click={() => sendAnswer(question._id, answerArr)}
				>Câu tiếp theo</button
			>
		{/if}
	{/await}
</div>

<style>
</style>

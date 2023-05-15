<script lang="ts">
	import 'src/styles/gameMultichoice.css';
	import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';

	enum PlayState {
		start = 2,
		end = 1,
		over = 0,
	}
	interface IQuestion {
		_id: string;
		question: any;
		choices: string[];
		sentence: string;
	}
	let token = localStorage.getItem('token') as string;
	let correctAnswer: string = '',
		answer: string = '',
		playState: PlayState = PlayState.end,
		data: IQuestion,
		score = 0;

	async function getRandomQuestion() {
		const res = await fetch(`/games/answer`, {
			method: 'GET',
			headers: {
				'content-type': 'form-encoded',
				Authorization: token,
			},
		});

		const response = await res.json();
		console.log(response.data);
		// if (response.status !== 200) window.location.href = '/';
		correctAnswer = response.data.missWord;
		data = {
			_id: response.data._id,
			question: formatQuestion(response.data.tokenize, response.data.missIndex),
			choices: response.data.choices,
			sentence: response.data.sentence,
		};
		return data;
	}

	async function getNewQuestion() {
		document.getElementById('button-check')
			? //@ts-ignore
			  (document.getElementById('button-check').disabled = false)
			: null;
		for (let i = 0; i < 4; i++) {
			//@ts-ignore
			document.getElementById(`choice_${i}`).disabled = false;
			document.getElementById(`choice_${i}`)!.style.backgroundColor = '#14f0949c';
			document.getElementById(`choice_${i}`)!.style.color = '#000';
		}
		await getRandomQuestion();
	}

	function formatQuestion(words: string[], missIndex: number) {
		let question = '';
		words.forEach((word, i) => {
			if (i === missIndex) question += ' _____';
			else if (i === words.length - 1) question += word;
			else question += ` ${word}`;
		});
		return question;
	}

	function hightlightChoice(choice: string, index: number) {
		answer = choice;
		for (let i = 0; i < 4; i++) {
			document.getElementById(`choice_${i}`)!.style.backgroundColor = '#14f0949c';
			document.getElementById(`choice_${i}`)!.style.color = '#000';
		}
		document.getElementById(`choice_${index}`)!.style.backgroundColor = '#059e5ed1';
		document.getElementById(`choice_${index}`)!.style.color = '#fff';
	}

	async function checkAnswer(answer: string, id: string) {
		let correct = true;
		//@ts-ignore
		document.getElementById('button-check').disabled = true;

		if (answer !== correctAnswer) {
			correct = false;
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

		for (let i = 0; i < 4; i++) {
			//@ts-ignore
			document.getElementById(`choice_${i}`).disabled = true;
			if (data.choices[i] === correctAnswer) {
				document.getElementById(`choice_${i}`)!.style.backgroundColor = '#ECD803 ';
			}
		}

		const res = await fetch(`/games/answer`, {
			method: 'POST',
			body: JSON.stringify({ sentenceId: id, correct: correct }),
			headers: {
				'content-type': 'form-encoded',
				Authorization: token,
			},
		});
		const response = await res.json();
		console.log(response);
	}
</script>

<div class="wrapper-game">
	{#await getRandomQuestion()}
		<p>Đang lấy câu hỏi</p>
	{:then question}
		<h1 class="title-game">
			Hãy tìm từ đúng!
			<i class="fa-solid fa-lightbulb fa-bounce" style="color: #ffeb0f;" />
		</h1>
		{#if playState === PlayState.end}
			<button
				class="button-start"
				on:click={() => {
					score = 0;
					playState = PlayState.start;
				}}
			>
				Bắt đầu
			</button>
		{:else if playState === PlayState.start}
			<button id="button-check" on:click={() => checkAnswer(answer, data._id)}>
				Kiểm tra đáp án
			</button>
			<button class="button-next-ques" on:click={getNewQuestion}>Câu khác</button>
		{/if}
		<button class="button-scores" on:click={() => (playState = PlayState.end)}>Kết thúc</button>

		<div class="game-info">
			<span />
			<span class="current-score">Điểm số: {score}</span>
		</div>
		<div id="container-game-answer">
			<div id="box-game-answer">
				{#if playState === PlayState.start}
					<span class="question">{data.question}</span>
				{/if}
			</div>
		</div>
		<div class="words">
			<div class="grid">
				{#if playState === PlayState.start}
					{#each data.choices as choice, i}
						<button id="choice_{i}" on:click={() => hightlightChoice(choice, i)}>
							{i + 1}. {choice}
						</button>
					{/each}
				{/if}
			</div>
		</div>
		<ToastContainer placement="top-right" let:data>
			<FlatToast {data} />
		</ToastContainer>
	{/await}
</div>

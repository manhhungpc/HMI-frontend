<script lang="ts">
	import { audioStore, sentenceStore } from 'src/utils/store';
	import { decode } from 'src/utils/token';
	import { onMount } from 'svelte';
	import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';

	export let bookSentences: any = [];
	let srcAudio: string,
		err = '',
		hasStream = false,
		idSentence = 0;
	// sentenceStore.subscribe()

	const token = localStorage.getItem('token') || '';
	let user = decode(token);

	enum AudioState {
		paused = 0,
		playing = 1,
	}
	let audio: HTMLAudioElement,
		state: AudioState = AudioState.playing;
	async function streamAudio() {
		if (hasStream === true) return;
		hasStream = true;
		for (let sentence of bookSentences) {
			const res = await fetch(`/tts?q=${sentence.sentence}`, {
				method: 'GET',
				headers: {
					'content-type': 'form-encoded',
					Authorization: token,
				},
			});
			const response = await res.json();
			srcAudio = response;
			await loadAudio(srcAudio);
		}
		return true;
	}
	async function loadAudio(src: string) {
		return new Promise((resolve, reject) => {
			audioStore.set(new Audio(src));

			audioStore.subscribe((voice) => {
				if (idSentence > 0) {
					document.getElementById(`sentence_hightlight_${idSentence - 1}`)!.style.backgroundColor =
						'#fff';
				}
				document.getElementById(`sentence_hightlight_${idSentence}`)!.style.backgroundColor =
					'#ffb300bf';
				audio = voice;
				state = AudioState.playing;
				audio.play();
				audio.onended = () => {
					resolve(idSentence++);
				};
			});
		});
	}

	function togglePause() {
		if (state === AudioState.paused) {
			state = AudioState.playing;
			audio.play();
			return;
		}
		state = AudioState.paused;
		audio.pause();
	}

	// $: idSentence && loadAudio(srcAudio);
</script>

<div class="list-button">
	<div class="title">Nghe audio ik &gt;///&lt;</div>
	<button class="button audio-start" on:click={() => streamAudio()}>
		<i class="fa-solid fa-volume-high fa-3x" />
	</button>
	<button class="button audio-pause-play" on:click={togglePause}>
		{#if state === AudioState.playing}
			<i class="fa-solid fa-circle-pause fa-3x" />
		{:else}
			<i class="fa-solid fa-forward fa-3x" />
		{/if}
	</button>

	<ToastContainer placement="top-right" let:data>
		<FlatToast {data} />
	</ToastContainer>
	<button class="button">
		<i class="fa-regular fa-circle-question fa-3x" />
	</button>
</div>

<style lang="scss">
	.list-button {
		width: 120px;
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		overflow-y: auto;
		overflow-x: hidden;
		margin-top: 20px;
		padding-left: 0px;
	}

	.title {
		padding: 0 0 20px;
		font-weight: 500;
		font-size: 15px;
	}

	.button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 80%;
		min-height: 30px;
		// border: 1px solid red;
		background-color: #fff;
		color: #000;
		border-radius: 10px;
		padding: 10px 0;
		margin: 20px 0;
	}

	// @media (max-width: 1045px) {
	// 	.list-button {
	// 		display: none;
	// 	}
	// }
</style>

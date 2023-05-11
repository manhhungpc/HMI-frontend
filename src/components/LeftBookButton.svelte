<script lang="ts">
	import { audioStore } from 'src/utils/store';
	import { decode } from 'src/utils/token';
	import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';

	export let streamAudio = () => {};
	export let srcAudio: string, selectedText: string;
	let err = '';

	const token = localStorage.getItem('token') || '';
	let user = decode(token);

	enum AudioState {
		paused = 0,
		playing = 1,
	}
	let audio: HTMLAudioElement,
		state: AudioState = AudioState.playing;
	function loadAudio(src: string) {
		audioStore.set(new Audio(src));
		audioStore.subscribe((voice) => {
			audio = voice;
			// audio = new Audio(src);
			state = AudioState.playing;
			audio.play();
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

	async function saveNotes(word: string) {
		const res = await fetch(`/user/${user._id}/words-note`, {
			method: 'POST',
			body: JSON.stringify({ word }),
			headers: {
				'content-type': 'application/json',
				Authorization: token as string,
			},
		});

		const response = await res.json();
		if (response.status !== 200) {
			err = response.err;
			return;
		}
		toasts.add({
			title: 'Đã thêm từ vựng thành công!',
			description: `Từ: ${word}`,
			duration: 5000, // 0 or negative to avoid auto-remove
			showProgress: true,
			placement: 'top-right',
			type: 'success',
			theme: 'dark',
		});
		console.log(response.data);

		return response.data;
	}

	$: loadAudio(srcAudio);
</script>

<div class="list-button">
	<div class="title">Bôi đen text để nghe audio, lưu từ</div>
	<button class="button audio-start" on:click={streamAudio}>
		<i class="fa-solid fa-volume-high fa-3x" />
	</button>
	<button class="button audio-pause-play" on:click={togglePause}>
		{#if state === AudioState.playing}
			<i class="fa-solid fa-circle-pause fa-3x" />
		{:else}
			<i class="fa-solid fa-forward fa-3x" />
		{/if}
	</button>

	<button class="button" on:click={() => saveNotes(selectedText)}>
		<i class="fa-regular fa-bookmark fa-3x" />
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

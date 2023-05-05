<script lang="ts">
	export let streamAudio = () => {};
	export let srcAudio: string;

	enum AudioState {
		paused = 0,
		playing = 1,
	}
	let audio: HTMLAudioElement,
		state: AudioState = AudioState.playing;
	function loadAudio(src: string) {
		audio = new Audio(src);
		state = AudioState.playing;
		audio.play();
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

	$: loadAudio(srcAudio);
</script>

<div class="list-button">
	<div class="title">Bôi đen text để nghe audio</div>
	<button class="button" on:click={streamAudio}>
		<i class="fa-solid fa-volume-high fa-3x" />
	</button>
	<!-- {#if srcAudio}
		<audio src={srcAudio} preload="all" controls autoplay class="audio" />
		{/if} -->
	<button class="button" on:click={togglePause}>
		{#if state === AudioState.playing}
			<i class="fa-solid fa-circle-pause fa-3x" />
		{:else}
			<i class="fa-solid fa-forward fa-3x" />
		{/if}
	</button>
	<button class="button">
		<i class="fa-regular fa-bookmark fa-3x" />
	</button>
	<button class="button" on:click={() => (window.location.href = '/')}>
		<i class="fa-solid fa-house fa-3x" />
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

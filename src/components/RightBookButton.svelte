<script lang="ts">
	import { audioStore } from 'src/utils/store';

	let audio: HTMLAudioElement,
		volume: number = 1,
		speed: number = 1;

	enum AudioVolume {
		down = 0,
		up = 1,
	}

	enum AudioSpeed {
		down = 0,
		up = 1,
	}

	$: audioStore.subscribe((voice) => {
		audio = voice;
		initAudio(audio);
	});

	$: audio ? (audio.volume = volume) : null;
	$: audio ? (audio.playbackRate = speed) : null;
	function initAudio(audio: HTMLAudioElement) {
		audio.volume = 1;
		audio.playbackRate = 1;
	}

	function changeVolume(type: AudioVolume) {
		if (type === AudioVolume.up) {
			if (volume === 1) return;
			volume += 0.1;
		}

		if (type === AudioVolume.down) {
			if (volume === Number(0.1)) return;
			volume -= 0.1;
		}
		volume = Number(volume.toFixed(1));
	}

	function changeSpeed(type: AudioSpeed) {
		if (type === AudioSpeed.up) {
			if (speed === 1) return;
			speed += 0.1;
		}

		if (type === AudioSpeed.down) {
			if (speed === Number(0.1)) return;
			speed -= 0.1;
		}
		speed = Number(speed.toFixed(1));
	}
</script>

<div class="list-button">
	<div class="title">Tăng, giảm tốc độ đọc, âm lượng</div>
	<p>Speed: {speed}</p>
	<p>volume: {volume}</p>
	<button class="button" name="audio-speed-up" on:click={() => changeSpeed(AudioSpeed.up)}>
		<i class="fa-solid fa-clock fa-2x" /> &nbsp;
		<i class="fa-solid fa-angles-up fa-2x" />
	</button>
	<button class="button" name="audio-speed-down" on:click={() => changeSpeed(AudioSpeed.down)}>
		<i class="fa-solid fa-clock fa-2x" /> &nbsp;
		<i class="fa-solid fa-angles-down fa-2x" />
	</button>
	<button class="button" name="audio-volume-up" on:click={() => changeVolume(AudioVolume.up)}>
		<i class="fa-solid fa-volume-high fa-2x" /> &nbsp;
		<i class="fa-solid fa-up-long fa-2x" />
	</button>
	<button class="button" name="audio-volume-down" on:click={() => changeVolume(AudioVolume.down)}>
		<i class="fa-solid fa-volume-low fa-2x" /> &nbsp;
		<i class="fa-solid fa-down-long fa-2x" />
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
</style>

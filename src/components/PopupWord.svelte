<script lang="ts">
	import { decode, getToken } from 'src/utils/token';
	import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';

	export let data = '';

	const token: string = getToken();
	let user = decode(token),
		err = '';

	async function streamAudio(body: string) {
		const res = await fetch(`/tts?q=${body}`, {
			method: 'GET',
			headers: {
				'content-type': 'form-encoded',
				Authorization: token,
			},
		});
		const response = await res.json();
		const audio = new Audio(response);
		audio.volume = 1;
		audio.playbackRate = 0.9;
		audio.play();
		return response;
	}

	async function getDefinition(word: string) {
		const res = await fetch(`/definition?q=${word}`, {
			method: 'GET',
			headers: {
				'content-type': 'form-encoded',
				Authorization: token,
			},
		});
		const response = await res.json();
		return response.data.roles;
	}

	async function getIllustration(word: string) {
		const res = await fetch(`/illustration?q=${word}`, {
			method: 'GET',
			headers: {
				'content-type': 'form-encoded',
				Authorization: token,
			},
		});

		let response = await res.json();
		response.data = response.data.filter(
			(data: any) => !data.url.includes('https://media.istockphoto.com')
		);
		if (response.status !== 200) window.location.href = '/user/login';
		return response.data.slice(0, 3);
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

		return response.data;
	}
</script>

<div>
	<p>🎉 Nghĩa của từ: <b class="word-data">{data}</b> 🍾</p>
	<div class="btn">
		<button class="btn-audio" on:click={() => streamAudio(data)}>
			<i class="fa-solid fa-volume-high" />
		</button>
		<button class="btn-audio" on:click={() => saveNotes(data)}>
			<i class="fa-regular fa-bookmark" />
		</button>
	</div>
	<ToastContainer placement="top-right" let:data>
		<FlatToast {data} />
	</ToastContainer>
	{#await getDefinition(data)}
		<p>Đang lấy định nghĩa ...</p>
	{:then roles}
		{#each roles as role, i}
			<p>
				{i + 1}, ({role.role}):
			</p>
			{#each role.defs as meaning}
				<p>- {meaning.def}</p>
			{/each}
			<div class="divide" />
		{/each}
		{#await getIllustration(data)}
			<p>Đang lấy hình minh họa ...</p>
		{:then illustrations}
			<p>Hình minh họa:</p>
			{#each illustrations as illu}
				<img src={illu.url} alt={data} />
			{/each}
		{/await}
	{/await}
</div>

<style>
	.btn {
		margin: 10px 0;
	}
	.btn-audio {
		padding: 10px 15px;
		background-color: #fdca95;
		border-radius: 10px;
	}
	.btn-audio:hover {
		background-color: #ffb86c;
	}
	.divide {
		height: 1px;
		background-color: #000;
		margin: 8px 0;
	}
	.word-data {
		font-size: 24px;
		font-family: 'Quicksand', sans-serif;
	}
</style>

<script lang="ts">
	import '../styles/authForm.css';
	let username = '',
		email = '',
		password = '';
	let response: any;
	export let action = () => {},
		signUp = false;
</script>

<svelte:head>
	<script src="https://accounts.google.com/gsi/client" async defer></script>
</svelte:head>
<div class="form-wrap">
	{#if signUp === true}
		<input class="form-input" type="text" placeholder="Username" bind:value={username} />
	{/if}
	<div>
		<input class="form-input" type="text" placeholder="Email" bind:value={email} />
	</div>
	<div>
		<input class="form-input" type="text" placeholder="Password" bind:value={password} />
	</div>
	<button class="btn" on:click={action}>Sign up</button>

	{#if response}
		<h1>{response.data.username}</h1>
	{/if}
</div>

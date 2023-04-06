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
	<div
		id="g_id_onload"
		data-client_id="395405875861-v7quf7rhpbprcrdiompnm56tim7g3ac1.apps.googleusercontent.com"
		data-login_uri="http://localhost:8000/api/v1/auth/signin/google"
	/>
	<div
		class="g_id_signin"
		data-type="standard"
		data-size="large"
		data-theme="outline"
		data-text="sign_in_with"
		data-shape="rectangular"
		data-logo_alignment="left"
	/>

	{#if response}
		<h1>{response.data.username}</h1>
	{/if}
</div>

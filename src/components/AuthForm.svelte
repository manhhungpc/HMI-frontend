<script lang="ts">
	import '../styles/authForm.css';
	export let username = '',
		email: string,
		password: string;
	let response: any,
		repeatPassword = '',
		err = '';
	export let action = () => {},
		signUp = false;
	$: console.log(err);
</script>

<svelte:head>
	<script src="https://accounts.google.com/gsi/client" async defer></script>
</svelte:head>
<div class="login-wrap">
	{#if signUp === true}
		<div class="login-html">
			<input id="tab-1" type="radio" name="tab" class="sign-in" disabled /><label
				for="tab-1"
				class="tab">Login</label
			>
			<input id="tab-2" type="radio" name="tab" class="sign-up" checked disabled /><label
				for="tab-2"
				class="tab">Register</label
			>
			<div class="login-form">
				<div class="sign-up-htm">
					<div class="group">
						<label for="pass" class="label">Name</label>
						<input id="pass" type="text" class="input" bind:value={username} />
					</div>
					<div class="group">
						<label for="pass" class="label">Email Address</label>
						<input id="pass" type="email" class="input" bind:value={email} />
					</div>
					<div class="group">
						<label for="pass" class="label">Password</label>
						<input type="password" class="input" data-type="password" bind:value={password} />
					</div>
					<div class="group">
						<label for="pass" class="label">Repeat Password</label>
						<input type="password" class="input" data-type="password" bind:value={repeatPassword} />
					</div>
					<div class="group">
						<button
							type="button"
							class="button-submit"
							on:click={() => {
								if (password !== repeatPassword) {
									err = 'Mật khẩu nhập lại không khớp';
									return;
								}
								action();
							}}>Register</button
						>
					</div>
					<div class="hr" />
					<a class="foot-link" href="/user/login">
						<p class="checktrue">Already register?<br /> Login here</p>
					</a>
					<a class="normal-link" href="/">
						<p>Go to homepage <i class="fa-solid fa-arrow-right-to-bracket" /></p>
					</a>
				</div>
			</div>
		</div>
	{:else}
		<div class="login-html">
			<input id="tab-1" type="radio" name="tab" class="sign-in" checked disabled /><label
				for="tab-1"
				class="tab">Login</label
			>
			<input id="tab-2" type="radio" name="tab" class="sign-up" disabled /><label
				for="tab-2"
				class="tab">Register</label
			>
			<div class="login-form">
				<div class="sign-in-htm">
					<div class="group">
						<label for="user" class="label">Email</label>
						<input id="user" type="text" class="input" bind:value={email} />
					</div>
					<div class="group">
						<label for="pass" class="label">Password</label>
						<input id="pass" type="password" class="input" bind:value={password} />
					</div>
					<div class="group">
						<input id="check" type="checkbox" class="check" checked />
						<label for="check"><span class="icon" /> Keep me Signed in</label>
					</div>
					<div class="group">
						<button type="button" class="button-submit" on:click={action}>Login</button>
					</div>
					<div class="hr" />
					<a class="foot-link" href="/user/register">
						<p class="checktrue">Create new account</p>
					</a>
					<a class="normal-link" href="/">
						<p>Go to homepage <i class="fa-solid fa-arrow-right-to-bracket" /></p>
					</a>
				</div>
			</div>
		</div>
	{/if}

	{#if response}
		<h1>{response.data.username}</h1>
	{/if}
</div>

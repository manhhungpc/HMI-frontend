<script lang="ts">
	import '/src/styles/authForm.css';
	import AuthForm from 'src/components/AuthForm.svelte';
	let email: string = '',
		password: string = '';
	let response: any;

	async function onLoginWithPassWord() {
		console.log(email, password);
		const res = await fetch('/user/login', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: {
				'content-type': 'application/json',
			},
		});

		response = await res.json();
		console.log(response);
		localStorage.setItem('token', response.token);
		return;
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>
<div class="container mx-auto">
	<div class="form-wrap">
		<AuthForm action={onLoginWithPassWord} bind:email bind:password />
	</div>
</div>

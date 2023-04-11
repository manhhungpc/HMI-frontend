<script lang="ts">
	import '/src/styles/authForm.css';
	import AuthForm from 'src/components/AuthForm.svelte';
	let email = '',
		password = '';
	let response: any;

	async function onLoginWithPassWord() {
		const res = await fetch('/auth/login', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: {
				'content-type': 'application/json',
			},
		});

		response = await res.json();
		console.log(response);
		return;
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>
<div class="container mx-auto">
	<div class="form-wrap">
		<AuthForm action={onLoginWithPassWord} />
	</div>
</div>

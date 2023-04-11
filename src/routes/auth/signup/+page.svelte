<script lang="ts">
	import '/src/styles/login.css';
	import AuthForm from 'src/components/AuthForm.svelte';
	let username = '',
		email = '',
		password = '';
	let response: any;

	async function onSignUp() {
		const res = await fetch('/auth/signup', {
			method: 'POST',
			body: JSON.stringify({ username, email, password }),
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
	<title>Sign up</title>
</svelte:head>
<div class="container mx-auto">
	<div class="form">
		<AuthForm action={onSignUp} signUp={true} />
	</div>
</div>

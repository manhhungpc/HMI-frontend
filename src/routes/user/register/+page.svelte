<script lang="ts">

	import '/src/styles/authForm.css';
	import AuthForm from 'src/components/AuthForm.svelte';
	let username = '',
		email = '',
		password = '',
		role = 'normal user',
		avatar = '';
	let response: any;

	async function onSignUp() {
		const data = {
			username,
			email,
			password,
			role,
			avatar,
		};
		const res = await fetch('/user/register', {
			method: 'POST',
			body: JSON.stringify(data),
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
	<div class="form-wrap">
		<AuthForm action={onSignUp} signUp={true} bind:username bind:email bind:password />
	</div>
</div>

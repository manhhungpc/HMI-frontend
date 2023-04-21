<script lang="ts">
	import '/src/styles/authForm.css';
	import AuthForm from 'src/components/AuthForm.svelte';
	import { setToken } from 'src/utils/token';
	import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';
	let email: string = '',
		password: string = '',
		response: any,
		err = '';

	const showErrToast = (message: string, body?: string) => {
		console.log(message);
		toasts.add({
			title: message,
			description: body ? body : '',
			duration: 3000, // 0 or negative to avoid auto-remove
			showProgress: true,
			placement: 'top-right',
			type: 'error',
			theme: 'dark',
			onClick: () => {},
			onRemove: () => {},
		});
		err = '';
	};

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
		if (response.status !== 200) {
			err = response.err;
		} else {
			setToken(response.token);
		}
		return;
	}

	$: err != '' && showErrToast(err);
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="container mx-auto">
	<div class="form-wrap">
		<ToastContainer placement="top-right" let:data>
			<FlatToast {data} />
		</ToastContainer>
		<AuthForm action={onLoginWithPassWord} bind:email bind:password />
	</div>
</div>

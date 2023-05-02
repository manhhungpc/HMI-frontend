<script lang="ts">
	import { setToken } from 'src/utils/token';
	import '/src/styles/authForm.css';
	import AuthForm from 'src/components/AuthForm.svelte';
	import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';

	let username = '',
		email = '',
		password = '',
		role = 'normal user',
		avatar = '';
	let response: any,
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

	async function onSignUp() {
		const data = {
			username,
			email,
			password,
			role,
			avatar,
		};
		if (!username || !email || !password) {
			err = 'Thiếu thông tin';
			return;
		}
		console.log(data);
		const res = await fetch('/user/register', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'content-type': 'application/json',
			},
		});

		response = await res.json();
		if (response.status !== 200) {
			err = response.err;
		} else {
			setToken(response.token);
			window.location.href = '/';
		}
		console.log(response);
		return;
	}

	$: err != '' && showErrToast(err);
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>
<div class="container mx-auto">
	<div class="form-wrap">
		<ToastContainer placement="top-right" let:data>
			<FlatToast {data} />
		</ToastContainer>
		<AuthForm action={onSignUp} signUp={true} bind:username bind:email bind:password />
	</div>
</div>

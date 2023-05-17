<script lang="ts">
	import { decode } from 'src/utils/token';
	//@ts-ignore
	import Avatar from 'svelte-avatar';

	let token = localStorage.getItem('token') as string;
	const user: any = token ? decode(token) : 'No user!';

	function redirectLink() {
		window.location.href = `/user/${user._id}/words-note`;
	}

	async function checkToken() {
		if (!token) return false;
		const res = await fetch(`/user/${user._id}`, {
			method: 'GET',
			headers: {
				'content-type': 'form-encoded',
				Authorization: token,
			},
		});

		const response = await res.json();
		if (response.status !== 200) {
			localStorage.removeItem('token');
			window.location.href = '/';
			return false;
		}

		return true;
	}

	function logout() {
		localStorage.removeItem('token');
		window.location.href = '/';
	}
</script>

<header>
	<div class="logo">
		<a href="/">
			<img src="/logo.png" alt="Storyline Online Logo" />
		</a>
	</div>
	<nav>
		<ul>
			<li><a href="/">Trang chủ</a></li>
			<li>/</li>
			<li><a href="/books">Sách</a></li>
			<li>/</li>
			<li><a href="/games/words-matching">Game sắp xếp từ</a></li>
			<li>/</li>
			<li><a href="/games/answer">Game trắc nghiệm</a></li>
			<li>/</li>
			<!-- <li><a href="/books/64539f33f840f3e97192810f/sentences">Books sentences</a></li> -->
			{#await checkToken()}
				<p>Loading ... Plz wait sir!</p>
			{:then token}
				{#if token}
					<li>
						<button class="btn" on:click={redirectLink}> Xin chào, {user.username}</button>
					</li>
					{#if user.role === 'admin'}
						<li>
							<button class="btn" on:click={() => (window.location.href = '/admin/books')}>
								<i class="fa-solid fa-user-pen" />
							</button>
						</li>
					{/if}
					<Avatar name={user.username} size="35px" style="margin-left: 10px;" />
					<li>
						<button class="btn btn-logout" on:click={logout}>
							<i class="fa-solid fa-right-from-bracket" />
						</button>
					</li>
				{:else}
					<li>
						<a href="/user/login">Đăng nhập</a>
					</li>
					<li>/</li>
					<li>
						<a href="/user/register">Đăng ký</a>
					</li>
				{/if}
			{/await}
		</ul>
	</nav>
</header>

<style>
	header {
		background-color: #fff;
		border-bottom: 1px solid #ccc;
		display: flex;
		justify-content: space-between;
		padding: 20px;
	}

	.logo img {
		height: 50px;
	}

	nav ul {
		display: flex;
		align-items: center;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav ul li {
		margin-left: 15px;
	}

	nav ul li:first-child {
		margin-left: 0;
	}

	.btn {
		color: #333;
		font-weight: 800;
	}
	nav ul li a,
	.btn {
		color: #333;
		text-decoration: none;
	}

	nav ul li a:hover,
	.btn:hover {
		text-decoration: underline;
	}

	.btn-logout:hover {
		background-color: #c8c8c8;
		border-radius: 500px;
		padding: 5px 8px;
	}
</style>

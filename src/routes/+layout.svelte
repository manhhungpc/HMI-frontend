<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page.url.pathname === '/user/login' || $page.url.pathname === '/user/register'}
	<slot />
{:else}
	<nav>
		<a href="/">Home</a>
		<a href="/user/register">Register</a>
		<a href="/user/login">Login</a>
		<a href="/books">All books</a>
		<a href="/authors">All authors</a>
	</nav>
	<slot />
{/if}

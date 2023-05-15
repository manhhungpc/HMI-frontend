<script>
	import '../styles/global.scss';
	import Header from 'src/components/Header.svelte';
	import { page } from '$app/stores';
</script>

{#if $page.url.pathname === '/user/login' || $page.url.pathname === '/user/register'}
	<slot />
{:else}
	<Header />
	<slot />
{/if}

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>

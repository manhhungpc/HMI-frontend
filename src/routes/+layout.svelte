<script>
	import '../styles/global.css';
	import Header from 'src/components/Header.svelte';
</script>

<Header />
<slot />

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>

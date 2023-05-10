<script lang="ts">
	import WordsSearch from 'src/components/WordsSearch.svelte';
	import WordsList from 'src/components/WordsList.svelte';
	import { page } from '$app/stores';

	let params = $page.params.userId;
</script>

<div class="app-container">
	<WordsSearch />
	<WordsList bind:params />
</div>

<script lang="ts">
	import { page } from '$app/stores';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	const authorId = data;
	console.log(authorId);
</script>

<h1>Author id: {$page.params.authorId}</h1>

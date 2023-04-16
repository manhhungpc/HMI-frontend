<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	const authors = data;
	console.log(authors);
</script>

<h1>Authors page</h1>

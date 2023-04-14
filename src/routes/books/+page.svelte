<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	const books = data;
	console.log(books);
</script>

<h1>Book</h1>

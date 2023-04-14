<script lang="ts">
	import { page } from '$app/stores';
	console.log($page.params);
</script>

<h1>Id: {$page.params.bookId}</h1>

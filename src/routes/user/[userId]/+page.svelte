<!-- <script lang="ts">
	import { page } from '$app/stores';
	console.log($page.params);
</script>

<h1>Id: {$page.params.userId}</h1> -->
<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	const user = data;
	console.log(user);
</script>

<h1>User id: {user.data._id}</h1>
<p>{JSON.stringify(data)}</p>

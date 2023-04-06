<script lang="ts">
	let name = '',
		visible = 'public';
	let response: any;

	async function onCreatProject() {
		const res = await fetch('/projects', {
			method: 'POST',
			body: JSON.stringify({ name, visible }),
			headers: {
				'content-type': 'application/json',
			},
		});

		response = await res.json();
		console.log(response);
		return;
	}
</script>

<h1>Project list:</h1>
<hr />
<input type="text" bind:value={name} placeholder="Project name" />
<input type="text" bind:value={visible} placeholder="Public or private?" />
<button on:click={onCreatProject}>Create new project</button>

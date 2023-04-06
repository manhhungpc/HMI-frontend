<script lang="ts">
	import { Canvas, PerspectiveCamera, OrbitControls, useThrelte } from '@threlte/core';
	import Plane from 'src/components/Plane.svelte';
	import Shape from 'src/components/Shape.svelte';
	import { addCube } from 'src/components/shapes/Cubes.svelte';
	import { addSphere } from 'src/components/shapes/Sphere.svelte';
	$: innerHeight = 0;
	$: innerWidth = 0;
</script>

<!-- 
	https://svelte.dev/repl/d5e331b972e346b9b42a66c94b5d19eb?version=3.55.1
	https://stackoverflow.com/questions/58287729/how-can-i-export-a-function-from-a-svelte-component-that-changes-a-value-in-the
-->
<svelte:window bind:innerWidth bind:innerHeight />
<div class="wrapper">
	<div class="pannel">
		<button on:click={addCube}>Add cube</button>
		<button on:click={addSphere}>Add sphere</button>
	</div>
	<div id="canvas">
		<Canvas size={{ width: innerWidth, height: innerHeight }}>
			<PerspectiveCamera position={{ z: 10, y: 5, x: 10 }}>
				<OrbitControls target={{ y: 0.75 }} />
			</PerspectiveCamera>
			<Plane />
			<Shape />
		</Canvas>
	</div>
</div>

<style>
	.wrapper {
		@apply flex justify-start;
	}
	.pannel {
		@apply bg-red-500 p-5;
	}
</style>

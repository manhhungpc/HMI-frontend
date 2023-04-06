<script lang="ts">
	import { onMount } from 'svelte';
	import { currScene } from 'src/utils/store';
	import Cubes from './shapes/Cubes.svelte';
	import Sphere from './shapes/Sphere.svelte';
	import { useThrelte, TransformControls } from '@threlte/core';
	import { Camera, PerspectiveCamera } from 'three';

	interface Shape {
		id: string;
		name?: string;
		geoName: any;
		position?: {
			x: number;
			y: number;
			z: number;
		};
		material?: any;
	}

	let infoGeo = [
		{ name: 'cube', geo: Cubes },
		{ name: 'sphere', geo: Sphere },
	];
	export let data: Array<Shape> = [];

	const { scene, renderer } = useThrelte();

	currScene.subscribe((sceneData) => {
		data = sceneData;
		for (let shape of data) {
			if (typeof shape.geoName != 'string') continue;
			shape.geoName = infoGeo.find((g) => g.name === shape.geoName)?.geo;
		}
		// data = data;
	});
	setTimeout(() => {
		console.log(scene.toJSON());
	}, 100);
</script>

{#each data as shapeData (shapeData.id)}
	<svelte:component this={shapeData.geoName}>
		<TransformControls />
	</svelte:component>
{/each}

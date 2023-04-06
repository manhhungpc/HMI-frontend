<script lang="ts" context="module">
	import { Mesh } from '@threlte/core';
	import { currScene } from 'src/utils/store';
	import { SphereGeometry, MeshPhongMaterial } from 'three';

	let x = 0,
		y = 0,
		z = 0;

	export function addSphere() {
		x = Math.random() * 8;
		y = Math.random() * 8;
		z = Math.random() * 8;
		currScene.update((scene: any) => {
			scene.push({ id: crypto.randomUUID(), geoName: 'sphere', pos: { x, y, z } });
			return scene;
		});
	}
</script>

<Mesh
	position={{ x, y, z }}
	geometry={new SphereGeometry(1, 1, 1)}
	material={new MeshPhongMaterial({ wireframe: true })}
/>

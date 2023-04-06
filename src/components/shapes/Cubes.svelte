<script lang="ts" context="module">
	import { Mesh, TransformControls } from '@threlte/core';
	import { currScene } from 'src/utils/store';
	import { BoxGeometry, MeshPhongMaterial } from 'three';

	let x = 0,
		y = 0,
		z = 0;

	export function addCube() {
		x = Math.random() * 6;
		y = Math.random() * 6;
		z = Math.random() * 6;
		currScene.update((scene: any) => {
			scene.push({ id: crypto.randomUUID(), geoName: 'cube', pos: { x, y, z } });
			return scene;
		});
	}
</script>

<Mesh
	position={{ x, y, z }}
	geometry={new BoxGeometry(2, 2, 2)}
	material={new MeshPhongMaterial({ wireframe: true })}
>
	<TransformControls />
</Mesh>

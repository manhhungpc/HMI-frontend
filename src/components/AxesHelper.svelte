<script lang="ts">
	import { Object3DInstance } from '@threlte/core';
	import { ArrowHelper, Mesh, Vector3 } from 'three';
	import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer';

	function createLabel(text: string) {
		let label = document.createElement('div');
		label.className = 'label';
		label.textContent = text;
		label.style.marginTop = '-1em';
		label.style.color = '#ff0000';
		const textLabel = new CSS2DObject(label);
		textLabel.position.set(0, 0, 0);
		textLabel.layers.set(5);
		return textLabel;
	}

	let labelRenderer = new CSS2DRenderer();
	labelRenderer.setSize(window.innerWidth, window.innerHeight);
	labelRenderer.domElement.style.position = 'absolute';
	labelRenderer.domElement.style.top = '0px';
	// document.body.appendChild(labelRenderer.domElement);

	let directX = new Vector3(1, 0, 0);
	directX.normalize();

	let directY = new Vector3(0, 1, 0);
	directY.normalize();
	let directZ = new Vector3(0, 0, 1);
	directZ.normalize();

	let origin = new Vector3(0, 0, 0);
	let length = 5;

	const axeX = new ArrowHelper(directX, origin, length, '#ff0000');
	// axeX.add(createLabel('X'));
	const axeY = new ArrowHelper(directY, origin, length, '#0000ff');
	const axeZ = new ArrowHelper(directZ, origin, length, '#00ff00');
</script>

<Object3DInstance object={axeX} />
<Object3DInstance object={axeY} />
<Object3DInstance object={axeZ} />

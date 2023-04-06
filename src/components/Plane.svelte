<script lang="ts">
	import { useThrelte } from '@threlte/core';
	import { GridHelper } from 'three';
	import { DEG2RAD } from 'three/src/math/MathUtils';
	import AxesHelper from './AxesHelper.svelte';

	const { scene } = useThrelte();
	const gridHelper = new GridHelper();
	scene.add(gridHelper);
</script>

<AxesHelper />

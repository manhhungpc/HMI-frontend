import { writable } from 'svelte/store';
// interface Shape {
//     id: string;
//     name: string;
//     geo: any;
//     position: {
//         x: number;
//         y: number;
//         z: number;
//     };
//     material: any;
// }
export const currScene = writable([]);

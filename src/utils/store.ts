import { writable } from 'svelte/store';

export const audioStore = writable(new Audio());

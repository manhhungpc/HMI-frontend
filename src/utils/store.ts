import { writable } from 'svelte/store';

export const audioStore = writable(new Audio());
export const wordStore: any = writable(null);
export const sentenceStore: any = writable({ data: '', id: 0, playing: false });

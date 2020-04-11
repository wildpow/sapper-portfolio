import { writable } from 'svelte/store';
let flown = writable(false);
export { flown };

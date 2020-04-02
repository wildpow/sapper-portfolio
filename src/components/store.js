import { writable } from 'svelte/store'

let firstMount = writable(true)

export { firstMount }

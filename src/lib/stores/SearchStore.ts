import { writable } from "svelte/store";

const SearchStore = writable<string|null>(null);

export default SearchStore;

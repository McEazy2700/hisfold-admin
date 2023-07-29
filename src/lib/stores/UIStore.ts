import { writable } from "svelte/store";

interface UIStore {
  theme: "dark" | "light";
}

const UI = writable<UIStore>({ theme: "light" });

export default UI;

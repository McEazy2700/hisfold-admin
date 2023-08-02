import { writable } from "svelte/store";
import type { AdminLiveStream } from "../types";

function customStore() {
  const { update, set, subscribe } = writable<AdminLiveStream[]>([]);

  function addStream(stream: AdminLiveStream) {
    update((curr) => [...curr, stream]);
  }

  function removeSream(id: number) {
    update((curr) => curr.filter((item) => item.id !== id));
  }

  return {
    set,
    update,
    subscribe,
    addStream,
    removeSream,
  };
}

export default customStore();

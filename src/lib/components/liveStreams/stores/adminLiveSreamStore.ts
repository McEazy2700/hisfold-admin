import { writable } from "svelte/store";
import type { AdminLiveStream } from "../types";

function customStore() {
  const { subscribe, update, set } = writable<AdminLiveStream>({});

  function setStream(stream: AdminLiveStream) {
    update(() => stream);
  }

  function clear() {
    update(() => ({}));
  }

  return {
    set,
    clear,
    update,
    subscribe,
    setStream,
  };
}

export default customStore();

import { writable } from "svelte/store";

function createFileStore() {
  const { subscribe, set, update } = writable<File[]>([]);
  function addFile(file: File) {
    update((curr) => [...curr, file]);
  }

  function removeFile(id: number) {
    update((curr) => curr.filter((_, index) => index !== id));
  }

  function use() {
    let files: File[] = [];
    update((curr) => {
      files = curr;
      return [];
    });
    return files;
  }

  function clear() {
    update(() => []);
  }

  return {
    set,
    use,
    clear,
    update,
    addFile,
    subscribe,
    removeFile,
  };
}

export default createFileStore();

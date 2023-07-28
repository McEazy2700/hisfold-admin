import { writable } from "svelte/store";
import type { NavState } from "./types";


type AdminStoreType = {
  nav: NavState;
};

const AdminStore = writable<AdminStoreType>({
  nav: {
    open: false,
    type: "mobile"
  },
});

export default AdminStore;

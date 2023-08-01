import { writable } from "svelte/store";

interface Church {
  name?: string;
  background?: string;
  profilePhoto?: string;
}

const UserStore = writable<Church>({
  name: "The Redeemed Christian church of God",
  background:
    "https://plus.unsplash.com/premium_photo-1681077401356-bbe7057ec541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
  profilePhoto:
    "https://www.pngkey.com/png/full/208-2089134_rccg-logo-redeemed-christian-church-logo.png",
});

export default UserStore;

import { writable } from "svelte/store";

interface Profile {
  name?: string;
  email?: string;
  phone?: string;
  youtube?: string;
  facebook?: string;
  tiktok?: string;
  instagram?: string;
  background?: string;
  logo?: string;
}
const ProfileStore = writable<Profile>({
  background: "https://plus.unsplash.com/premium_photo-1681077401356-bbe7057ec541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
  logo: "https://hisfold.com/h-nobg-1400w.png"
})

export default ProfileStore;

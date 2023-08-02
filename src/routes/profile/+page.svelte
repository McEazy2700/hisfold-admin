<script lang="ts">
	import { ProfileStore } from '$lib/stores';
	import { ProfileImages, ProfileForm } from '$lib/components/profile';
	$: profile = $ProfileStore;
</script>

<ProfileImages
  editable
	avatarTitle="Profile"
  background={profile.background ?? ""}
	avatarCaption="Update church contact and socials"
	avatar={profile.logo}
/>
<ProfileForm />

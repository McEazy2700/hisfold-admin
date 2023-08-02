<script>
	import { FormField, Label, FieldSet } from '$lib/components/forms';
	import { ProfileStore } from '$lib/stores';
	$: profile = $ProfileStore;

  function handleSave() {
    console.log("saving")
  }
</script>

<form on:submit|preventDefault={handleSave} class="mt-32 lg:px-20 p-3">
	<FieldSet>
		<FormField
			type="text"
			bind:value={profile.name}
			defaultValue={profile.name}
			placeholder="Your church's name"
		>
			<svelte:fragment slot="label">Name</svelte:fragment>
		</FormField>
	</FieldSet>

	<FieldSet legend="Contact">
		<FormField
			type="email"
			bind:value={profile.email}
			defaultValue={profile.email}
			placeholder="example@gmail.com"
		>
			<svelte:fragment slot="label">
				<Label icon="clarity:email-solid" iconColor="text-violet-400">Email</Label>
			</svelte:fragment>
		</FormField>
		<FormField type="tel" defaultValue={profile.phone} bind:value={profile.phone}>
			<svelte:fragment slot="label">
				<Label icon="bi:phone-fill">Phone</Label>
			</svelte:fragment>
		</FormField>
	</FieldSet>

	<FieldSet legend="Socials">
		<FormField
			type="url"
			bind:value={profile.youtube}
			defaultValue={profile.youtube}
			placeholder="https://youtube.com/@your_channel"
		>
			<svelte:fragment slot="label">
				<Label icon="mingcute:youtube-fill" iconColor="text-red-600">YouTube</Label>
			</svelte:fragment>
		</FormField>

		<FormField
			type="url"
			bind:value={profile.facebook}
			defaultValue={profile.facebook}
			placeholder="https://web.facebook.com/facebook_username"
		>
			<svelte:fragment slot="label">
				<Label icon="akar-icons:facebook-fill" iconColor="text-blue-500">FaceBook</Label>
			</svelte:fragment>
		</FormField>

		<FormField
			type="url"
			bind:value={profile.tiktok}
			defaultValue={profile.tiktok}
			placeholder="https://www.tiktok.com/@tiktok_username"
		>
			<svelte:fragment slot="label">
				<Label icon="fa6-brands:tiktok">TikTok</Label>
			</svelte:fragment>
		</FormField>

		<FormField
			type="url"
			bind:value={profile.instagram}
			defaultValue={profile.instagram}
			placeholder="https://www.instagram.com/instagram_username"
		>
			<svelte:fragment slot="label">
				<Label icon="skill-icons:instagram">Instagram</Label>
			</svelte:fragment>
		</FormField>
	</FieldSet>
	<div class="flex w-full my-4 justify-end">
		<button type="submit" class="btn variant-filled">Save</button>
	</div>
</form>

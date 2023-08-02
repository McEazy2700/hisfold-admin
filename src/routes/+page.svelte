<script lang="ts">
	import { ProfileImages, AdminLiveStreams } from '$lib/components';
	import { ProfileStore } from '$lib/stores';
	$: profile = $ProfileStore;
</script>

<div class="relative">
	<ProfileImages
		avatar={profile.logo}
		avatarTitle={profile.name}
    avatarCaption={profile.email}
		background={profile.background ?? ''}
	/>
	<a
		class="absolute top-1 right-1 btn-group flex items-center variant-glass-secondary rounded"
		href="/profile"
	>
		<iconify-icon class="text-xl p-0.5" icon="mingcute:edit-3-fill" />
		<span class="p-0.5 px-1">Edit</span>
	</a>
</div>

<div class="mt-16 p-2 lg:mt-28 lg:p-4">
  <AdminLiveStreams />
</div>

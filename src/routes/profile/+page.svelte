<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
  import { ChurchStore } from '$lib/stores';
	import ProfileForm from '$lib/components/profile/ProfileForm.svelte';
  $: church = $ChurchStore;
</script>

<div>
	<div class="relative w-full">
		<img
			class="object-cover rounded rounded-tl-[4rem] w-full max-h-48"
			src={church.background}
			alt="placeholder background"
		/>
		<div class={`
        absolute -bottom-[30%] lg:-bottom-[55%] left-[10%]
        bg-transparent flex items-center gap-3
      `}>
			<div class="bg-surface-50-900-token p-1 rounded-full w-fit">
				<Avatar width="w-24 lg:w-32" src={church.profilePhoto} />
			</div>
      <div>
        <h2 class="h2">Profile</h2>
        <p>Update church profile and socials media</p>
      </div>
		</div>
	</div>
</div>

<ProfileForm />

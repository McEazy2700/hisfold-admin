<script lang="ts">
	import { FieldSet, FormField } from '$lib/components/forms';
	import { modalStore } from '@skeletonlabs/skeleton';
  import type { AdminLiveStream } from '../types';
	import { adminLiveSreamStore, liveStreamsStore } from '../stores';
	$: liveStream = $adminLiveSreamStore;
  $: liveStreams = $liveStreamsStore

	function handleCreateStream() {
    const newStream: AdminLiveStream = {
      ...liveStream,
      id: liveStreams.length + 1,
      dateAdded: new Date().toISOString(),
      status: "up comming"
    }
    console.log("updating store")
    liveStreamsStore.set([...liveStreams, newStream])
    adminLiveSreamStore.clear()
    modalStore.clear()
  }
</script>

<form
	on:submit|preventDefault={handleCreateStream}
	class="bg-surface-50-900-token w-full max-w-2xl p-3 rounded-lg"
>
	<h3 class="h3 font-bold">New Live Stream</h3>

	<hr class="my-2" />

	<FieldSet>
		<FormField bind:value={liveStream.name} placeholder="My livestream" type="text">
			<svelte:fragment slot="label">
				<span>Name</span>
			</svelte:fragment>
		</FormField>

		<FormField bind:value={liveStream.url} placeholder="https://link.com/yourlivestream" type="url">
			<svelte:fragment slot="label">
				<span>Link</span>
			</svelte:fragment>
		</FormField>
	</FieldSet>
	<div class="w-full flex items-end justify-end py-3">
		<button type="submit" class="btn variant-filled rounded-lg">Save</button>
	</div>
</form>

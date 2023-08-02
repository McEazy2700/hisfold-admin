<script lang="ts">
	import {
		Table,
		tableMapperValues,
		type ModalSettings,
		type TableSource,
		modalStore
	} from '@skeletonlabs/skeleton';
	import type { AdminLiveStream, StreamStatus } from './types';
	import { adminLiveSreamStore, liveStreamsStore } from '.';
	import { onDestroy } from 'svelte';

  let liveStreams: AdminLiveStream[] = []

  const unsub = liveStreamsStore.subscribe(val => {
    liveStreams = val
  })

	const liveSreamsTable: TableSource = {
		head: ['Id', 'Name', 'Link', 'Date Added', 'Status'],
		body: tableMapperValues(liveStreams, ['id', 'name', 'url', 'dateAdded', 'status']),
		meta: tableMapperValues(liveStreams, ['id', 'name', 'url', 'dateAdded', 'status'])
	};

	const liveStreamActionModal: ModalSettings = {
		type: 'component',
		component: 'adminLiveSreamAction'
	};

	const newLiveStreamModal: ModalSettings = {
		type: 'component',
		component: 'newLiveSream'
	};

	function handleSelect(e: CustomEvent<string[]>) {
		const details = e.detail;
		adminLiveSreamStore.setStream({
			id: parseInt(String(details[0])),
			name: details[1],
			url: details[2],
			dateAdded: details[3],
			status: details[4] as StreamStatus
		});

		modalStore.trigger(liveStreamActionModal);
	}

  function handleNewStream() {
    adminLiveSreamStore.clear();
    modalStore.trigger(newLiveStreamModal);
  }

  onDestroy(unsub)
</script>

<div class="flex flex-col bg-surface-100-800-token rounded-md overflow-hidden">
	<Table on:selected={handleSelect} interactive source={liveSreamsTable} />
	<button
		on:click={handleNewStream}
		type="button"
		class="btn btn-sm self-end variant-filled rounded-md mt-1">+ New Live Stream Link</button
	>
</div>

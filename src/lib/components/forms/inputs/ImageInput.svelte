<script lang="ts">
	import { FileDropzone } from '@skeletonlabs/skeleton';
	import { ImageInputItem } from '.';
	import { FilesStore } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';

	export let multiple = false;
	$: files = $FilesStore;

	const dispatch = createEventDispatcher();

	function handleSetFiles(e: Event) {
		let recieved = (e.target as HTMLInputElement).files;
		if (recieved) {
			for (let i = 0; i < recieved.length; i++) {
				const file = recieved[i];
				if (file.type.includes('image')) {
					FilesStore.addFile(file);
				}
			}
		}
	}

	function handleRemoveFile(e: CustomEvent<{ id: number }>) {
		FilesStore.removeFile(e.detail.id);
	}

	function handleSave() {
		console.log('saving');
		dispatch('save', { status: 'success' });
	}
</script>

<div
	class={`
    max-w-2xl border-[0.5px] dark:border-surface-700 border-surface-400
    flex flex-col items-ceter rounded-lg bg-surface-50-900-token p-2 w-full
`}
>
	<h3 class="h3 font-bold my-2 mb-4">Upload Images</h3>
	<ul class="flex py-3 gap-2 flex-wrap">
		{#each files as file, index}
			<ImageInputItem
				imageId={index}
				on:delete={handleRemoveFile}
				src={URL.createObjectURL(file)}
				alt={file.name}
			/>
		{/each}
	</ul>

	<FileDropzone name="image" on:change={handleSetFiles} {multiple} accept="image/*">
		<svelte:fragment slot="lead">
			<iconify-icon class="text-4xl" icon="ion:image" />
		</svelte:fragment>
		<svelte:fragment slot="message">
			<div class="flex text-lg flex-col items-center">
				<strong>Drag and Drop</strong>
				<p>
					or <span class="italic text-tertiary-50-900-token">click</span> to select
				</p>
			</div>
		</svelte:fragment>
		<svelte:fragment slot="meta">
			<p class="mt-2">PNG, JPG and SVG allowed</p>
		</svelte:fragment>
	</FileDropzone>

	<button
		type="button"
		on:click={handleSave}
		class="btn variant-filled rounded-md mt-2 w-fit self-end">Save</button
	>
</div>

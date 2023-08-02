<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { IconButton } from '$lib/components';
	export let src: string;
	export let alt: string;
  export let imageId: number
	const dispatch = createEventDispatcher();

	function handleDelete(id: number) {
		dispatch('delete', { status: 'success', id });
	}
</script>

<div class="relative w-fit">
	<img class="w-20 object-cover aspect-square rounded-md" {src} {alt} />
	<IconButton
    size="xs"
		icon="jam:close"
    on:click={() => handleDelete(imageId)}
		className="absolute -top-1 -right-1 text-red-50 variant-glass-error"
	/>
</div>

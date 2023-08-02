<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let icon: string;
	export let className: string | null = null;
	export let size: 'xs' | 'base' | 'lg' = 'base';
	export let area = size == 'xs' ? 'w-5 h-5' : size == 'base' ? 'w-9 h-9' : 'w-12 h-9';

	const dispatch = createEventDispatcher();

	function handleDelete() {
		dispatch('click', { status: 'success' });
	}
</script>

<button
	type="button"
	on:click={handleDelete}
	class={`btn-icon ${area} btn-sm aspect-square ${className}`}
>
	<iconify-icon class="text-xl" {icon} />
</button>

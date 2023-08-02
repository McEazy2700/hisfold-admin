<script>
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { SearchStore } from '$lib/stores';
</script>

<div class="flex flex-1 items-center gap-2">
	<input bind:value={$SearchStore} type="search" class="input" placeholder="Search" />
	<div class="absolute bottom-4 right-16 lg:static">
		<LightSwitch />
	</div>
</div>

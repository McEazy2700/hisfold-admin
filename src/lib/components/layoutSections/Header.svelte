<script lang="ts">
	import { AppBar, drawerStore } from '@skeletonlabs/skeleton';
	import { Trail } from '$lib/components';

	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<AppBar slotLead="m-0" padding="p-1 lg:p-3" shadow="shadow-lg">
	<svelte:fragment slot="lead">
		<div class="flex items-center">
			<button on:click={drawerOpen} class="w-12 lg:hidden btn btn-sm mr-0">
				<iconify-icon class="text-3xl" icon="majesticons:menu" />
			</button>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<Trail />
	</svelte:fragment>
	<h2>HisFold</h2>
</AppBar>

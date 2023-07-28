<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	import Navigation from '$lib/components/navigation/navigation.svelte';
	import { AppBar, AppShell, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import IoIosMenu from 'svelte-icons/io/IoIosMenu.svelte';
	import '../app.postcss';

	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<Drawer>
	<div class="bg-white h-full">
		<h2 class="p-4 text-lg">Navigation</h2>
		<hr />
		<Navigation />
	</div>
</Drawer>
<AppShell
	slotHeader="bg-white shadow-md"
	slotSidebarLeft="mt-1 bg-white w-0 transition-all lg:w-56 rounded-md"
>
	<svelte:fragment slot="header">
		<AppBar shadow="shadow-lg" background="white">
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button on:click={drawerOpen} class="w-12 lg:hidden btn btn-sm mr-4">
						<IoIosMenu />
					</button>
				</div>
			</svelte:fragment>
    <h2>HisFold</h2>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>

	<main class="bg-white rounded-md w-full h-full m-1 p-1">
		<slot />
	</main>
</AppShell>

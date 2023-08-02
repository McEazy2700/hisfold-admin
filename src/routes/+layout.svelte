<script lang="ts">
	/* theme, colorscheme & icons */
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import 'iconify-icon';
	/* theme, colorscheme & icons end */

	import { AppShell, Modal } from '@skeletonlabs/skeleton';
	import { MobileDrawer, Navigation, Header } from '$lib/components';
	import { modalComponentRegistry } from '$lib/components/modals';
</script>

<Modal components={modalComponentRegistry} />

<div>
	<MobileDrawer />
	<AppShell
		slotHeader="shadow-md"
		slotPageContent="max-h-[85vh] flex-1 overflow-auto"
		slotSidebarLeft={`
      mt-1 h-screen dark:shadow-zinc-300/5 shadow-md
      shadow-black/20 w-0 transition-all lg:w-56 rounded-md
    `}
	>
		<svelte:fragment slot="header">
			<Header />
		</svelte:fragment>

		<svelte:fragment slot="sidebarLeft">
			<div class="p-3">
				<Navigation />
			</div>
		</svelte:fragment>
		<slot />
	</AppShell>
</div>

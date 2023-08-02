<script lang="ts">
	/* theme & colorscheme */
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { UIStore } from '$lib/stores';
	$: ui = $UIStore;
	/* theme & colorscheme end */

	import 'iconify-icon';
	import { AppShell, Modal, type ModalComponent } from '@skeletonlabs/skeleton';
	import { MobileDrawer, ProfileCoverChange, Navigation, Header } from '$lib/components';

	const modalComponentRegistry: Record<string, ModalComponent> = {
		profileCoverChange: {
			ref: ProfileCoverChange,
			slot: '<p>Skeleton</p>'
		}
	};
  
</script>

<Modal components={modalComponentRegistry} />
<div class={ui.theme}>
	<MobileDrawer />
	<AppShell
		slotHeader="shadow-md"
		slotPageContent="max-h-[90vh] flex-1 overflow-auto"
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

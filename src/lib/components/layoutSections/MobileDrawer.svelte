<script lang="ts">
	import { Drawer } from '@skeletonlabs/skeleton';
	import { Navigation, NavUtils, User } from '$lib/components';
</script>

<Drawer width="w-80">
	<div class="h-full relative">
		<h2 class="p-4 font-semibold text-lg">HisFold</h2>
		<hr />
		<div class="p-4 flex flex-col h-[87%] justify-between">
			<div class="flex flex-col gap-1">
				<NavUtils />
				<Navigation />
			</div>
			<User />
		</div>
	</div>
</Drawer>

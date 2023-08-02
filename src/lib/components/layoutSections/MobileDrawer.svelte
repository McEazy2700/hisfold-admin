<script lang="ts">
	import { Drawer, LightSwitch } from '@skeletonlabs/skeleton';
	import { Navigation, User } from '$lib/components';
</script>

<Drawer width="w-80">
	<div class="h-full relative">
		<h2 class="p-4 font-semibold text-lg">HisFold</h2>
		<hr />
		<div class="p-4 flex flex-col h-[87%] justify-between">
			<Navigation />
			<div class="flex items-center justify-between">
				<User />
				<div>
					<LightSwitch />
				</div>
			</div>
		</div>
	</div>
</Drawer>

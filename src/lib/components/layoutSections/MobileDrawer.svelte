<script lang="ts">
	import { Drawer } from '@skeletonlabs/skeleton';
	import { Navigation, NavUtils, User } from '$lib/components';
</script>

<Drawer>
	<div class="h-full">
		<h2 class="p-4 text-lg">HisFold</h2>
		<hr />
		<div class="p-4 flex flex-col h-[87%] justify-between">
			<div>
				<NavUtils />
				<Navigation />
			</div>
			<User />
		</div>
	</div>
</Drawer>

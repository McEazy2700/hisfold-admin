<script lang="ts">
  import { Drawer } from '@skeletonlabs/skeleton';
  import { Navigation, NavUtils } from "$lib/components";
</script>

	<Drawer>
		<div class="h-full">
			<h2 class="p-4 text-lg">Navigation</h2>
			<hr />
    <div class="p-4">
      <NavUtils />
			<Navigation />
    </div>
		</div>
	</Drawer>

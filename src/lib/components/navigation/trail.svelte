<script>
	import User from '../user/user.svelte';
	import NavUtils from './NavUtils.svelte';
</script>

<div class="flex items-center gap-5">
	<div class="hidden lg:block">
		<NavUtils />
	</div>
	<User />
</div>

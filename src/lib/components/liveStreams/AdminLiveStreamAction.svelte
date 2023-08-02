<script lang="ts">
	import moment from 'moment';
	import { adminLiveSreamStore } from '.';
	$: liveSream = $adminLiveSreamStore;
	const status =
		liveSream?.status === 'in progress'
			? 'bg-blue-100 text-blue-500'
			: liveSream?.status === 'up comming'
			? 'bg-warning-300 text-warning-500'
			: 'bg-success-300/20 text-success-500';
</script>

<div
	class={`
    bg-surface-100-800-token border-[0.5px]
    border-surface-300-600-token p-3 rounded-lg w-full max-w-2xl
  `}
>
	<div class="flex items-baseline w-full justify-between">
		<h3 class="h3">{liveSream?.name}</h3>
		<time class="line-clamp-1" datetime={liveSream?.dateAdded}
			>{moment(liveSream?.dateAdded ?? '').fromNow()}</time
		>
	</div>

	<hr class="my-2" />

	<div class="mt-4 flex flex-col gap-2">
		<div class="flex items-baseline flex-nowrap line-clamp-1 gap-2">
			<span class="text-lg font-semibold">Link:</span>
			<a class="text-secondary-500-400-token" href={liveSream?.url}>{liveSream?.url}</a>
		</div>
		<div class="flex items-baseline flex-nowrap line-clamp-1 gap-2">
			<span class="text-lg font-semibold">Status:</span>
			<span class={`${status} p-0.5 rounded px-2`}>{liveSream?.status}</span>
		</div>
	</div>

	<div class="flex w-full items-center justify-end mt-4">
		<div class="flex items-center gap-1">
			<button type="button" class="btn btn-sm lg:px-10 px-7 bg-error-400-500-token">Delete</button>
			<button
				type="button"
				class="btn btn-sm lg:px-10 px-7 bg-surface-700-200-token text-surface-50-900-token"
				>Edit</button
			>
		</div>
	</div>
</div>

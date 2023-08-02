<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { IconButton } from '$lib/components';

	export let editable = false;
	export let background: string;
	export let avatar: string | null = null;
	export let avatarTitle: string | null = null;
	export let avatarCaption: string | null = null;
</script>

<div>
	<div class="relative w-full">
		<div class="relative">
			<img
				class="object-cover rounded rounded-tl-[4rem] w-full max-h-48"
				src={background}
				alt="placeholder background"
			/>
      
			{#if editable}
				<button
					class="btn-group flex items-center variant-glass-tertiary rounded absolute bottom-1 right-1"
					type="button"
				>
					<iconify-icon icon="mingcute:edit-3-fill" class="text-lg p-0.5 px-1" />
					<span class="p-0.5 px-1">Change</span>
				</button>
			{/if}
		</div>

		{#if avatar}
			<div
				class={`
      absolute -bottom-[30%] lg:-bottom-[55%] left-[10%]
      bg-transparent flex items-center gap-3
    `}
			>
				<div class="relative bg-surface-50-900-token p-1 rounded-full w-fit">
					<Avatar width="w-24 lg:w-32" src={avatar} />
					{#if editable}
						<IconButton
							className="variant-glass-tertiary absolute bottom-3 -right-1 p-0.5"
							icon="mingcute:edit-3-fill"
						/>
					{/if}
				</div>
				<div>
					{#if avatarTitle}
						<h2 class="h2">{avatarTitle}</h2>
					{/if}
					{#if avatarCaption}
						<p>{avatarCaption}</p>
					{/if}
				</div>
			</div>
		{/if}
	</div>
</div>

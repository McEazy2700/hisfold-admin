<script lang="ts">
	import type { HTMLInputTypeAttribute } from '$lib/types/components';
	import PhoneInput from './PhoneInput.svelte';
	export let type: HTMLInputTypeAttribute = 'text';
	export let placeholder: string | null = null;
  export let defaultValue: string | null = null;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export let value: any = defaultValue;

  function handleInput(e: Event){
    value = (e.target as HTMLInputElement).value;
  }
</script>

<label class="label flex flex-col lg:flex-row gap-1 lg:items-center w-full justify-between">
	<span class="flex-[0.3]">
		<slot name="label" />
	</span>
	{#if type === 'tel'}
		<PhoneInput defaultValue={defaultValue} bind:value={value} />
	{:else}
		<input
			{type}
			{placeholder}
			class="input flex-1 rounded-md"
			{...$$restProps}
      value={defaultValue}
			on:input={handleInput}
		/>
	{/if}
</label>

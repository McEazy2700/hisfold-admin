<script lang="ts">
	import { TelInput, normalizedCountries } from 'svelte-tel-input';
	import type { CountryCode, DetailedValue, E164Number } from 'svelte-tel-input/types';
	export let defaultValue: string | null = null;

	let countryCode: CountryCode | null = 'NG';
	let valid = true;
	export let value: E164Number | null = defaultValue;
	let detailedValue: DetailedValue | null = null;

	function handleInput(e: Event) {
		value = (e.target as HTMLInputElement).value;
	}
</script>

<div class="flex flex-1 gap-1 p-0 m-0 items-center">
	<select name="Country" class="w-fit lg:-translate-x-1.5 {!valid && 'border-error-400'} select">
		<option value={null} hidden={countryCode !== null}> Please Select </option>
    
		{#each normalizedCountries as country}
			<option
				value={country.iso2}
				selected={country.iso2 === countryCode}
				aria-selected={country.iso2 === countryCode}
				>{`${country.iso2} + ${country.dialCode}`}</option
			>
		{/each}
    
	</select>
	<TelInput
		class="select flex-1 {!valid && 'border-error-400'}"
		bind:country={countryCode}
		value={defaultValue}
		on:input={handleInput}
		bind:valid
		bind:detailedValue
	/>
</div>

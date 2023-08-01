<script lang="ts">
  export let legend: string | null = null;
</script>

<fieldset class="flex mt-3 flex-col gap-1">
  {#if legend}
    <legend class="opacity-30">{legend}</legend>
  {/if}
	<slot />
	<hr class="mt-3" />
</fieldset>

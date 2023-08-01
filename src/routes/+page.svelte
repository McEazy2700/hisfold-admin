<script lang="ts">
  import { SearchStore } from "$lib/stores";
  $: search = $SearchStore;
</script>

<h1 class="h1">Welcome Victor</h1>
{#if search !== null && search !== ""}
  <p>Search: {search}</p>
{:else}
  <p>No searched param</p>
{/if}

<div>Some new stuff</div>

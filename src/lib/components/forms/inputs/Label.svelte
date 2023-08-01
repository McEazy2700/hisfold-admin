<script lang="ts">
  export let icon: string | null = null;
  export let iconColor: string | null = null;
</script>

<div class="flex items-center gap-2">
  {#if icon}
    <iconify-icon class={`text-2xl ${iconColor}`} {icon} />
  {/if}
  <slot />
</div>

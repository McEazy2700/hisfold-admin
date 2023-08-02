<script lang="ts">
  export let icon: string;
  export let className: string | null = null;
</script>

<button type="button" class={`btn-icon w-9 btn-sm aspect-square ${className}`}>
  <iconify-icon class="text-xl" {icon}/>
</button>

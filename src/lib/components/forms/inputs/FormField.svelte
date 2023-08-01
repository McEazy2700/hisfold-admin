<script lang="ts">
  import type { HTMLInputTypeAttribute } from "$lib/types/components";
  export let type: HTMLInputTypeAttribute = "text";
  export let placeholder: string | null = null;
</script>

<label class="label flex flex-col lg:flex-row gap-1 items-center w-full justify-between">
  <span class="flex-[0.3]">
    <slot name="label" />
  </span>
  <input {type} {placeholder} class="input flex-1 rounded-md" {...$$restProps} />
</label>

<script lang="ts">
  import { ImageInput } from "$lib/components";
	import { FilesStore } from "$lib/stores";
  import { modalStore } from "@skeletonlabs/skeleton";

  function handleSave() {
    FilesStore.clear();
    modalStore.clear();
  }
</script>


<ImageInput on:save={handleSave}/>

<script>
  import { adminUrl } from "$lib/constants/urls";
</script>

<ul class="list-nav">
  {#each adminUrl as url}
    <li>
      <a class="flex items-center" href={url.href}>
        <iconify-icon class="text-xl" icon={url.icon}/>
        <span>{url.name}</span>
      </a>
    </li>
  {/each}
</ul>

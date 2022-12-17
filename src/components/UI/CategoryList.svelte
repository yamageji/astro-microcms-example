<script lang="ts">
  export let categories: string[];
</script>

<ul class="flex gap-2">
  {#each categories as category (category)}
    <li class="h-fit rounded-sm  bg-stone-300 px-2 py-0.5 text-sm">
      {category}
    </li>
  {/each}
</ul>

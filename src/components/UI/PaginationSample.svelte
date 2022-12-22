<script lang="ts">
  import type { Page } from 'astro';

  export let page: Page;
</script>

<nav class="flex items-center gap-4">
  <p class="text-lg font-bold">page {page.currentPage}/{page.lastPage}</p>
  <ul class="flex gap-2">
    {#if page.url.prev}
      <li>
        <a
          href={page.url.prev}
          class="rounded-sm border border-stone-500 bg-stone-100 px-2 py-1 duration-150 hover:bg-stone-200"
        >
          PREV
        </a>
      </li>
    {/if}
    {#if page.url.next}
      <li>
        <a
          href={page.url.next}
          class="rounded-sm border border-stone-500 bg-stone-100 px-2 py-1 duration-150 hover:bg-stone-200"
        >
          NEXT
        </a>
      </li>
    {/if}
  </ul>
</nav>

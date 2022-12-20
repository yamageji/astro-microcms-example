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
          class="rounded-md border border-stone-500 px-4 py-2"
        >
          PREV
        </a>
      </li>
    {/if}
    {#if page.url.next}
      <li>
        <a
          href={page.url.next}
          class="rounded-md border border-stone-500 px-4 py-2"
        >
          NEXT
        </a>
      </li>
    {/if}
  </ul>
</nav>

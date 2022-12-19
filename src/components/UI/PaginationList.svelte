<script lang="ts">
  import PaginationItem from './PaginationItem.svelte';
  import PaginationPrevNext from './PaginationPrevNext.svelte';
  import type { Page } from 'astro';

  export let page: Page;

  const pager = [...Array(page.lastPage).keys()].map((i) => ++i);
  const getPath = (page: number) => {
    return `./${page}`;
  };
</script>

<nav aria-label="pagination">
  <ul
    class="flex items-center justify-center gap-1 font-barlow-semi text-sm font-semibold"
  >
    {#if page.url.prev}
      <li>
        <PaginationPrevNext href={page.url.prev} type={'prev'} />
      </li>
    {/if}

    {#if 3 < page.currentPage}
      <li>
        <PaginationItem
          currentPage={page.currentPage}
          page={1}
          href={getPath(1)}
        />
      </li>
      <li>&#8230;</li>
    {/if}

    {#each pager as p (p)}
      {#if page.currentPage - 2 <= p && p <= page.currentPage + 2}
        <li>
          <PaginationItem
            currentPage={page.currentPage}
            page={p}
            href={getPath(p)}
          />
        </li>
      {/if}
    {/each}

    {#if page.currentPage + 2 < page.lastPage}
      <li>&#8230;</li>
      <li>
        <PaginationItem
          currentPage={page.currentPage}
          page={page.lastPage}
          href={getPath(page.lastPage)}
        />
      </li>
    {/if}

    {#if page.url.next}
      <li>
        <PaginationPrevNext href={page.url.next} type={'next'} />
      </li>
    {/if}
  </ul>
</nav>

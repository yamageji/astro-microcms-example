<script lang="ts">
  import PaginationItem from './PaginationItem.svelte';
  import PaginationPrevNext from './PaginationPrevNext.svelte';
  import type { Page } from 'astro';

  export let page: Page;
  export let adjacentPageNumber = 1;

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

    {#if adjacentPageNumber + 1 < page.currentPage}
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
      {#if page.currentPage - adjacentPageNumber <= p && p <= page.currentPage + adjacentPageNumber}
        <li>
          <PaginationItem
            currentPage={page.currentPage}
            page={p}
            href={getPath(p)}
          />
        </li>
      {/if}
    {/each}

    {#if page.currentPage < page.lastPage - adjacentPageNumber}
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

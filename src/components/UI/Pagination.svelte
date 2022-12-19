<script lang="ts">
  import Pager from './Pager.svelte';
  import PagerPrevNext from './PagerPrevNext.svelte';
  import type { Page } from 'astro';

  export let page: Page;

  const pager = [...Array(Math.ceil(page.total / page.size)).keys()].map(
    (i) => ++i
  );
  const getPath = (page: number) => {
    return `./${page}`;
  };
</script>

<nav>
  <ul
    class="font-barlow-semi flex items-center justify-center gap-1 text-sm font-semibold"
  >
    {#if page.url.prev}
      <li>
        <PagerPrevNext href={page.url.prev} type={'prev'} />
      </li>
    {/if}

    {#if 3 < page.currentPage}
      <li>
        <Pager currentPage={page.currentPage} page={1} href={getPath(1)} />
      </li>
      <li>...</li>
    {/if}

    {#each pager as p (p)}
      {#if page.currentPage - 2 <= p && p <= page.currentPage + 2}
        <li>
          <Pager currentPage={page.currentPage} page={p} href={getPath(p)} />
        </li>
      {/if}
    {/each}

    {#if page.currentPage + 2 < pager.length}
      <li>...</li>
      <li>
        <Pager
          currentPage={page.currentPage}
          page={pager.length}
          href={getPath(pager.length)}
        />
      </li>
    {/if}

    {#if page.url.next}
      <li>
        <PagerPrevNext href={page.url.next} type={'next'} />
      </li>
    {/if}
  </ul>
</nav>

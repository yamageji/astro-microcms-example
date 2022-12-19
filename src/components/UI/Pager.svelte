<script lang="ts">
  export let currentPage: number;
  export let page: number;
  export let href: string;
</script>

{#if currentPage === page}
  <a
    {href}
    class="flex h-8 w-8 items-center justify-center rounded-[4px] border border-teal-500 text-xl text-teal-500 duration-150"
  >
    {page}
  </a>
{:else}
  <a
    {href}
    class="flex h-8 w-8 items-center justify-center rounded-[4px] text-xl text-slate-700 duration-150 hover:text-teal-500"
  >
    {page}
  </a>
{/if}

<script lang="ts">
  import IconChevronRight from '@components/icons/IconChevronRight.svelte';
  import IconChevronLeft from '@components/icons/IconChevronLeft.svelte';

  export let type: 'prev' | 'next';
  export let href: string;
</script>

{#if type === 'prev'}
  <a
    {href}
    class="group mr-2 flex gap-1 text-base tracking-wider text-slate-700"
  >
    <span class="duration-150 group-hover:text-teal-500">
      <IconChevronLeft />
    </span>
    <span class="duration-150 group-hover:text-teal-500"> PREV </span>
  </a>
{:else if type === 'next'}
  <a
    {href}
    class="group ml-2 flex gap-1 text-base tracking-wider text-slate-700"
  >
    <span class="duration-150 group-hover:text-teal-500"> NEXT </span>
    <span class="duration-150 group-hover:text-teal-500">
      <IconChevronRight />
    </span>
  </a>
{/if}

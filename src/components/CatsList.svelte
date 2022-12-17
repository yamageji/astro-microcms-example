<script type="ts">
  import type { CatResponse } from '@library/useApi';
  import { useConvertDate } from '@library/useConvertDate';
  import CategoryList from '@components/UI/CategoryList.svelte';

  export let cats: CatResponse[];
</script>

<ul class="flex flex-col gap-4">
  {#each cats as cat (cat.id)}
    <li>
      <a
        href={`cats/${cat.id}`}
        class="flex gap-4
         rounded-md border border-stone-200 bg-stone-100 p-2 shadow-sm duration-150 hover:bg-stone-200"
      >
        <img
          src={cat.image.url}
          height={cat.image.height}
          width={cat.image.width}
          alt=""
          class="h-32 w-32 rounded-md"
        />
        <div class="">
          <h2 class="text-2xl font-bold">{cat.title}</h2>
          <time datetime={cat.date}>{useConvertDate(cat.date)}</time>
          <div class="mt-2">
            <CategoryList categories={cat.category} />
          </div>
        </div>
      </a>
    </li>
  {/each}
</ul>

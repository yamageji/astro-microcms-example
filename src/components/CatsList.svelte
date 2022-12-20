<script type="ts">
  import type { CatResponse } from '@library/useApi';
  import { useConvertDate } from '@library/useConvertDate';
  import CategoryList from '@components/UI/CategoryList.svelte';

  export let cats: CatResponse[];
</script>

<ul
  class="xs:grid-cols-2 mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3"
>
  {#each cats as cat (cat.id)}
    <li class="">
      <a
        href={`/cats/${cat.id}`}
        class="flex h-full flex-col gap-3
         rounded-md border border-stone-300 bg-stone-100 p-2 shadow-sm duration-150 hover:bg-stone-200"
      >
        <img
          src={cat.image.url}
          height={cat.image.height}
          width={cat.image.width}
          alt=""
          class="aspect-square w-full rounded-md shadow-sm"
        />
        <div class="mb-6 px-1">
          <div class="flex items-center justify-between">
            <time
              datetime={cat.date}
              class="font-barlow-semi text-sm text-stone-600"
              >{useConvertDate(cat.date)}</time
            >
            <div class="font-barlow-semi">
              <CategoryList categories={cat.category} />
            </div>
          </div>
          <h2 class="mt-2 text-xl font-bold text-stone-800">{cat.title}</h2>
        </div>
      </a>
    </li>
  {/each}
</ul>

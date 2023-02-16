<!--
 +page.svelte
 sveltekit-tailwind-starter-template
 
 Created by Ian Thompson on December 28th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
    import Hymnal from "$lib/util/HymnalManifest"


    
</script>

<div class="p-2 mb-9">
    <div class="rounded-md bg-gray-100 p-2 space-y-5">
        <input type="text" placeholder="Search for a hymn by number or name" class="input input-bordered w-full" />
        <button class="btn w-full">Search</button>
    </div>
</div>

<div class="w-full flex justify-between px-5 py-2 border-b">
    <div class="">
        <h3 class="text-xl font-bold">Hymn</h3>
    </div>
    <div class="">
        <p class="font-bold text-xl" >Page</p>
    </div>
</div>
{#each Hymnal as hymn}
    <a href={`/hymnal/${hymn.slug}`} class="w-full flex justify-between p-5 border-b even:bg-gray-50">
        <div class="">
            <h3 class="text-xl">{hymn.title}</h3>
            <p class="text-sm">{hymn.author}</p>
        </div>
        <div class="">
            <p class="font-bold">{hymn.index}</p>
        </div>
    </a>
{/each}
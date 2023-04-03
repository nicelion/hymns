<!--
 Search.svelte
 hymns-and-hops
 
 Created by Ian Thompson on April 3rd 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
    import Fuse from "fuse.js"

    import Hymnal from "$lib/util/HymnalManifest"

    let results = Hymnal
    let searchQuerey = ""

    const fuse = new Fuse(results, {
        keys: ["title", "index"]
    })

    // console.log(fuse.search(""))

    const handleSearch = () => {

        if (searchQuerey == "") {
            results = Hymnal
        } else {
            results = fuse.search(searchQuerey).map((h, i) => {
                return {
                    ...h.item
                }
            })
        }
    }
</script>


<div class="p-2 mb-9">
    <div class="rounded-md bg-gray-100 p-2 space-y-5">
        <input type="text" placeholder="Search for a hymn by number or name" class="input input-bordered w-full" bind:value={searchQuerey} on:input={handleSearch}/>
        <button class="btn w-full" on:click={handleSearch}>Search</button>
    </div>
</div>
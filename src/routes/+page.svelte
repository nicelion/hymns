
<!-- <div class="w-full h-1/5">
    <img src="/img/bar.jpg" class="w-full h-full blur-sm -z-10" alt="">
</div> -->

<!-- <div class="w-full flex flex-col items-center justify-center py-5 h-1/5" style="background-image: url('/img/bar.jpg');">
    <div class="flex flex-col items-center text-cornsilk text-xl">
        <h2 class="">Come Sing With Us</h2>
    </div>
    <div class="grid grid-flow-col gap-5 text-center auto-cols-max pt-5">
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="countdown font-mono text-5xl">
            <span style="--value:15;"></span>
          </span>
          days
        </div> 
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="countdown font-mono text-5xl">
            <span style="--value:10;"></span>
          </span>
          hours
        </div> 
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="countdown font-mono text-5xl">
            <span style="--value:24;"></span>
          </span>
          min
        </div> 
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="countdown font-mono text-5xl">
            <span style="--value:54;"></span>
          </span>
          sec
        </div>
      </div>
</div>


<div class="w-full">
   <div class="grid grid-cols-2 gap-2 p-2">
        <a href="/hymnal" class="bg-eerie-black rounded-md shadow-lg text-cornsilk text-center text-xl p-4">
            <p>Hymnal</p>
        </a>
        <div class="bg-eerie-black rounded-md shadow-lg text-cornsilk text-center text-xl p-4">
            <p>About</p>
        </div>
   </div> 
</div> -->

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

<svelte:head>
  <title>Beers & Bops</title>
</svelte:head>

<div class="p-2 mb-9">
  <div class="rounded-md bg-gray-100 p-2 space-y-5">
      <input type="text" placeholder="Search for a hymn by number or name" class="input input-bordered w-full" bind:value={searchQuerey} on:input={handleSearch}/>
      <button class="btn w-full" on:click={handleSearch}>Search</button>
  </div>
</div>

<div class="w-full flex justify-between px-5 py-2 border-b">
  <div class="">
      <h3 class="text-xl font-bold">Hymn</h3>
  </div>
  <div class="">
      <p class="font-bold text-xl" >#</p>
  </div>
</div>
{#each results as hymn}
  <a href={`/${hymn.slug}`} class="w-full flex justify-between p-5 border-b even:bg-gray-50">
      <div class="">
          <h3 class="text-xl">{hymn.title}</h3>
          <!-- <p class="text-sm">{hymn.author}</p> -->
      </div>
      <div class="">
          <p class="font-bold">{hymn.index}</p>
      </div>
  </a>
{/each}
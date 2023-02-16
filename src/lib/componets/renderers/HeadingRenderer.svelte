<!--
 HeadingRenderer.svelte
 hymns-and-hops
 
 Created by Ian Thompson on February 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
    export let depth: number;
    export let text: string;
    console.log("DATA", depth);
</script>


{#if depth == 1}
    <h1 id={text} class="text-4xl font-bold mb-6 text-center">{text}</h1>
{:else if depth == 2}
    <h2 id={text} class="text-3xl font-bold mb-6 text-center">{text}</h2>
{:else if depth == 3}
    <h3 id={text} class="text-2xl font-bold mb-6 text-center">{text}</h3>
{:else if depth == 4} 
    <h4 id={text} class="text-xl font-bold mb-6 text-center">{text}</h4>
{:else if depth == 5}
    <h5 id={text} class="text-md font-bold mb-6 ">{text}</h5>
{:else if depth == 6}
    <h6 id={text} class="text-sm font-bold mb-6 text-center">{text}</h6>
{:else}
    {text}
{/if }
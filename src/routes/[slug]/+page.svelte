<!--
 +page.svelte
 sveltekit-tailwind-starter-template
 
 Created by Ian Thompson on February 5th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import EmRenderer from '$lib/componets/renderers/EmRenderer.svelte';
	import HeadingRenderer from '$lib/componets/renderers/HeadingRenderer.svelte';
	import ParagraphRenderer from '$lib/componets/renderers/ParagraphRenderer.svelte';
    import SvelteMarkdown from 'svelte-markdown'

    /** @type {import('./$types').PageData} */
    export let data

    console.log("data", data);
    
</script>

<svelte:head>
    <title>{data.title} | HYMNS & HOPS</title>
</svelte:head>

<div class="px-5">
    <div class="breadcrumbs text-content">
        <ul>
          <li><a href="/">Hymns</a></li> 
          <li>{data.title}</li>
        </ul>
    </div>
</div>
<div class="px-5">
    <div class="space-y-2 my-7">
        <h2 class="font-bold text-center text-3xl">{data.title}</h2>
        <p class="text-center italic font-light text-2xl">#{data.index}</p>
    </div>
    <SvelteMarkdown source={data.content} renderers={{paragraph: ParagraphRenderer, heading: HeadingRenderer, em: EmRenderer}} options={{gfm: true, breaks: true}}/>
    <p>{data.author}, {data.license}</p>
</div>

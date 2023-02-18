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

<div class="px-5">
    <h2 class="font-bold text-center text-3xl">{data.title}</h2>
    <SvelteMarkdown source={data.content} renderers={{paragraph: ParagraphRenderer, heading: HeadingRenderer, em: EmRenderer}} options={{gfm: true, breaks: true}}/>
    <p>{data.author}, {data.license}</p>
</div>

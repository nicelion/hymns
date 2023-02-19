<!--
 ParagraphRenderer.svelte
 hymns-and-hops
 
 Created by Ian Thompson on February 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script>
    export let text = undefined
</script>
  
<!-- <p class="leading-relaxed">{text}</p> -->
<p class="mb-14 text-2xl leading-loose"><slot></slot></p>

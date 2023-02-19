<!--
 +error.svelte
 hymns-and-hops
 
 Created by Ian Thompson on February 18th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
    import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error?.message}</h1>
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

<div class="p-4 space-y-6">
    <p class="text-center w-full text-2xl font-bold">{$page.status}: {$page.error?.message}</p>
    <p>
        Please report this issue through <a class="underline text-yellow-500" href="https://github.com/nicelion/hymns/issues">GitHub issues</a> or by emailing <a class="underline text-yellow-500" href="mailto:ianthompson@nicelion.com">ianthompson@nicelion.com</a>
    </p>
</div>

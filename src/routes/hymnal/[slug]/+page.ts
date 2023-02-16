/**
 +page.ts
 hymns-and-hops
 
 Created by Ian Thompson on February 5th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import type { PageLoad } from './$types';

export const load = (async ({params, fetch}) => {
    console.log(params);
    const res = await fetch(`/hymns/${params.slug}.md`)
    const item = await res.text()

    console.log(item);
    

    return {item};
}) satisfies PageLoad;
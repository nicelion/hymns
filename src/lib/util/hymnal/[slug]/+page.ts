/**
 +page.ts
 hymns-and-hops
 
 Created by Ian Thompson on February 5th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import type { PageLoad } from './$types';
import Hymnal from '$lib/util/HymnalManifest';
import type { Hymn } from '$lib/util/types/Hymnal';

export const load = (async ({params, fetch}) => {
    console.log(params);
    const res = await fetch(`/hymns/${params.slug}.md`)
    const item = await res.text()

    // console.log(item);
    
    let info: Hymn = Hymnal.filter(item => item.slug == params.slug)[0]

    
    return {
        ...info,
        content: item
    };
}) satisfies PageLoad;
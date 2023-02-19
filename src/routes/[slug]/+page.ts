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
import { error } from '@sveltejs/kit';

export const load = (async ({params, fetch}) => {

    const res = await fetch(`/hymns/${params.slug}.md`)
    const item = await res.text()


    
    let info = Hymnal.filter(item => item.slug == params.slug)
    
    if (info.length == 0) {
        throw error(404, {
            message: "Not found!"
        })
    } 
    
    
    return {
        ...info[0],
        content: item
    };
}) satisfies PageLoad;
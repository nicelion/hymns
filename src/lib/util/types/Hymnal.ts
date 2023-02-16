/**
 Hymnal.ts
 hymns-and-hops
 
 Created by Ian Thompson on February 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

export interface Hymn {
    title: string,
    index: number,
    author: string,
    license: string,
    slug: string
}

export interface Hymnal {
    hymnal: [Hymn]
}
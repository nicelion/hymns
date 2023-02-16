/*
 * HymnalManifest.ts
 * hymns-and-hops
 * 
 * Created by Ian Thompson on February 15th 2023
 * ianthompson@nicelion.com
 * https://www.nicelion.com
 * 
 * Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 * 
 */

import type { Hymn } from "./types/Hymnal"

const Hymnal : [Hymn] = [
    {
        title: "Apostles' Creed",
        index: 1,
        license: "Public Domain",
        author: "Unknown",
        slug: "apostles-creed"
    },
    {
        title: "A Mighty Fortress",
        index: 12,
        license: "Public Domain",
        author: "Martin Luther",
        slug: "a-mighty-fortress"
    }, 
    {
        title: "Alas, Did My Savior Bleed",
        index: 13,
        license: "Public Domain",
        author: "Isaac Watts",
        slug: "alas-did-my-savior-bleed"
    }, 
    {
        title: "All Creatures",
        index: 14,
        license: "Public Domain",
        author: "Saint Francis of Assisi",
        slug: "all-creatures"
    },
    {
        title: "All Hail The Power",
        index: 15,
        license: "Public Domain",
        author: "Edward Perronet",
        slug: "all-hail-the-power"
    },
]

export default Hymnal
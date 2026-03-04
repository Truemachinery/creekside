export interface Sponsor {
    name: string;
    id: string;
    logo?: string;
}

export const sponsors: Sponsor[] = [
    { name: 'AOT', id: 'aot', logo: '/SPonsors/AOT.webp' },
    { name: 'TJ', id: 'tj', logo: '/SPonsors/TJ.png' },
    { name: 'Graphics Up', id: 'graphicsup', logo: '/SPonsors/graphics_up_logo_reversed-01.png' },
    { name: 'KMS', id: 'kms', logo: '/SPonsors/kms-logo.png' },
    { name: 'Woods Cycle Country', id: 'woodscycle', logo: '/SPonsors/woodscyclecountry-logo.png' },
];

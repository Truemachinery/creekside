export interface Track {
    id: string;
    name: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    description: string;
    features: string[];
    color: string;
}

export const tracks: Track[] = [
    {
        id: 'main',
        name: 'Main Track',
        difficulty: 'Advanced',
        description:
            'Our flagship motocross track featuring technical jumps, fast straightaways, and championship-caliber obstacles. Built for serious riders looking to push their limits.',
        features: ['Tabletops', 'Whoops', 'Rhythm sections', 'Sand turns', 'Step-up jumps'],
        color: '#ff6b00',
    },
    {
        id: 'vet',
        name: 'Vet Track',
        difficulty: 'Intermediate',
        description:
            'A flowing, intermediate-level track designed for veteran riders. Smooth corners, moderate jumps, and a forgiving layout that still delivers an exciting ride.',
        features: ['Smooth berms', 'Moderate jumps', 'Wide lanes', 'Flow sections', 'Gradual elevation'],
        color: '#f5a623',
    },
    {
        id: 'peewee',
        name: 'Peewee Track',
        difficulty: 'Beginner',
        description:
            'A safe, fun track for the youngest riders in the family. Gentle terrain, small rollers, and wide-open space to learn and build confidence on two wheels.',
        features: ['Mini rollers', 'Wide turns', 'Flat terrain', 'Fenced area', 'Parent viewing'],
        color: '#4ade80',
    },
];

import type { Field } from 'payload'

export const HomePageHero: Field = {
    name: 'hero',
    label: 'Sekcja Hero',
    type: 'group',
    fields: [
        {
            name: 'title',
            label: 'Tytuł',
            type: 'textarea',
            required: true,
            localized: true,
            admin: {
                description: 'Nagłówek głównej sekcji strony.',
            },
        },
        {
            name: 'description',
            label: 'Opis',
            type: 'text',
            required: true,
            localized: true,
            admin: {
                description: 'Krótki opis sekcji hero.',
            },
        },
        {
            name: 'phrases',
            label: 'Dynamiczne frazy',
            type: 'array',
            labels: {
                singular: 'Fraza',
                plural: 'Frazy',
            },
            fields: [
                {
                    name: 'phrase',
                    type: 'text',
                    label: 'Fraza',
                    required: true,
                    localized: true,
                },
            ],
            admin: {
                description: 'Frazy wyświetlane rotacyjnie.',
            },
        }
    ]
}

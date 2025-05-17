import type { Field } from 'payload'

export const HomePagePricing: Field = {
    name: 'pricing',
    label: 'Sekcja Cennika',
    type: 'group',
    fields: [
        {
            name: 'title',
            label: 'Tytuł',
            type: 'text',
            required: true,
            localized: true,
        },
        {
            name: 'description',
            label: 'Opis',
            type: 'textarea',
            required: true,
            localized: true,
        },
        {
            name: 'items',
            label: 'Elementy Cennika',
            type: 'array',
            labels: {
                singular: 'Element Cennika',
                plural: 'Elementy Cennika',
            },
            fields: [
                {
                    name: 'title',
                    label: 'Tytuł',
                    type: 'text',
                    required: true,
                    localized: true,
                },
                {
                    name: 'description',
                    label: 'Opis',
                    type: 'textarea',
                    required: true,
                    localized: true,
                },
                {
                    name: 'price',
                    label: 'Cena',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'advantages',
                    label: 'Zalety',
                    type: 'array',
                    labels: {
                        singular: 'Zaleta',
                        plural: 'Zalety',
                    },
                    fields: [
                        {
                            name: 'advantage',
                            type: 'text',
                            label: 'Zaleta',
                            required: true,
                        }
                    ]
                },
                {
                    name: 'recommended',
                    label: 'Rekomenduj',
                    type: 'checkbox',
                    required: true
                }
            ]
        }
    ]
}

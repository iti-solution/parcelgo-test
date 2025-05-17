import type { Field } from 'payload'

export const HomePageFunctionalities: Field = {
    name: 'functionalities',
    label: 'Sekcja funkcjonalności',
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
            label: 'Funkcjonalności',
            type: 'array',
            labels: {
                singular: 'Funkcjonalność',
                plural: 'Funkcjonalności',
            },
            localized: true,
            minRows: 1,
            maxRows: 12,
            fields: [
                {
                    name: 'title',
                    label: 'Tytuł',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'description',
                    label: 'Opis',
                    type: 'textarea',
                    required: true,
                },
                {
                    name: 'image',
                    label: 'Obraz',
                    type: 'upload',
                    relationTo: 'media',
                    required: true
                }
            ]
        }
    ]
}

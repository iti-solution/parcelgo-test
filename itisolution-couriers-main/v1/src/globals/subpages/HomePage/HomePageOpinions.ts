import type { Field } from 'payload'

export const HomePageOpinions: Field = {
    name: 'opinions',
    label: 'Sekcja opinii',
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
            label: 'Opinie',
            type: 'array',
            labels: {
                singular: 'Opinia',
                plural: 'Opinie',
            },
            localized: true,
            minRows: 1,
            maxRows: 12,
            fields: [
                {
                    name: 'opinion',
                    label: 'Opinia',
                    type: 'textarea',
                    required: true,
                },
                {
                    name: 'author',
                    label: 'Autor',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'role',
                    label: 'Rola',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'avatar',
                    label: 'Avatar',
                    type: 'upload',
                    relationTo: 'media',
                    required: true
                }
            ]
        }
    ]
}
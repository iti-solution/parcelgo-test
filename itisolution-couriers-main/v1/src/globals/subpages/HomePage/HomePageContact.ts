import type { Field } from 'payload'
import path from 'path'

export const HomePageContact: Field = {
    name: 'contact',
    label: 'Sekcja Kontaktowa',
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
            name: 'features',
            label: 'Zalety',
            type: 'array',
            minRows: 4,
            maxRows: 4,
            labels: {
                singular: 'Zaleta',
                plural: 'Zalety',
            },
            fields: [
                {
                    name: 'icon',
                    label: 'Ikona',
                    type: 'text',
                    required: true,
                    admin: {
                        description: "Wybierz ikonę",
                        components: {
                            Field: {
                                path: '@/components/payload/IconPickerField'
                            }
                        }
                    }
                },
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
            ],
        }
    ]
}
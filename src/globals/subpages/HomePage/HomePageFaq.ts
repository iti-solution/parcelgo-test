import type { Field } from 'payload'

export const HomePageFaq: Field = {
    name: 'faq',
    label: 'Sekcja Faq',
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
            label: 'Pytania i Odpowiedzi',
            type: 'array',
            labels: {
                singular: 'Pytanie i Odpowiedź',
                plural: 'Pytania i Odpowiedzi',
            },
            fields: [
                {
                    name: 'question',
                    label: 'Pytanie',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'answer',
                    label: 'Odpowiedź',
                    type: 'textarea',
                    required: true,
                }
            ]
        }
    ]
}

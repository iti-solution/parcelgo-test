import type { Block } from 'payload'

const PostsCta: Block = {
    slug: 'posts-cta',
    labels: {
        singular: 'Blok CTA',
        plural: 'Bloki CTA',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Tytuł',
            required: false
        },
        {
            name: 'description',
            type: 'text',
            label: 'Opis',
            required: false
        }
    ]
}

export default PostsCta

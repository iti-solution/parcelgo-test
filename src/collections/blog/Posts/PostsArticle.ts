import { lexicalEditor } from '@payloadcms/richtext-lexical'

import type { Block } from 'payload'

const PostsArticle: Block = {
    slug: 'posts-article',
    labels: {
        singular: 'Blok artykułu',
        plural: 'Bloki artykułu',
    },
    fields: [
        {
            name: 'content',
            type: 'richText',
            label: 'Treść',
            editor: lexicalEditor({}),
            required: true
        },
    ]
}

export default PostsArticle

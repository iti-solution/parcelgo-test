import { revalidateTag } from 'next/cache'

import PostsCta from './PostsCta'
import PostsArticle from './PostsArticle'

import type { CollectionConfig } from 'payload'

const slug = 'posts'

const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Post',
    plural: 'Posty',
  },
  admin: {
    group: 'Blog',
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt']
  },
  versions: {
    drafts: true
  },
  hooks: {
    afterChange: [args => (revalidateTag(slug), revalidateTag([slug, args.doc.slug].join('')))],
  },
  fields: [
    {
      name: 'language',
      type: 'select',
      label: 'Język',
      required: true,
      options: [
        { label: 'Polski', value: 'pl' },
        { label: 'Angielski', value: 'en' }
      ],
      admin: {
        position: 'sidebar'
      }
    },
    {
      name: 'title',
      type: 'text',
      label: 'Tytuł',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      unique: true,
      required: true,
      admin: {
        description: '/blog/[slug] (Ustaw URL)',
        components: {
          Field: {
            path: '@/components/payload/SlugField',
            clientProps: {
              fieldToUse: 'title'
            }
          }
        }
      }
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Opis',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Obraz',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      label: 'Autor',
      relationTo: 'authors',
      required: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      label: 'Kategorie',
      relationTo: 'categories',
      hasMany: true,
      required: true
    },
    {
      name: 'blocks',
      type: 'blocks',
      label: 'Bloki',
      blocks: [PostsCta, PostsArticle]
    },
  ]
}

export default Posts

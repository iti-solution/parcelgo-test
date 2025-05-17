import { revalidateTag } from 'next/cache'

import type { CollectionConfig } from 'payload'

const slug = 'categories'

const Categories: CollectionConfig = {
  slug: slug,
  labels: {
    singular: 'Kategoria',
    plural: 'Kategorie',
  },
  admin: {
    group: 'Blog',
    useAsTitle: 'name'
  },
  hooks: {
    afterChange: [() => revalidateTag(slug)],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nazwa',
      required: true,
      localized: true
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      unique: true,
      required: true,
      admin: {
        description: 'Ustaw identyfikator kategorii (najlepiej po angielsku)',
        components: {
          Field: {
            path: '@/components/payload/fields/SlugField',
            clientProps: {
              fieldToUse: 'name'
            }
          }
        }
      }
    },
  ]
}

export default Categories
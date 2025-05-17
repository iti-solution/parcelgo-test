import type { CollectionConfig } from 'payload'

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'Media',
    plural: 'Media',
  },
  admin: {
    group: 'Ogólne'
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}

export default Media
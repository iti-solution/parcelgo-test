import type { CollectionConfig } from 'payload'

const Authors: CollectionConfig = {
  slug: 'authors',
  labels: {
    singular: 'Autor',
    plural: 'Autorzy'
  },
  admin: {
    group: 'Blog',
    useAsTitle: 'fullName'
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      label: 'Imię i nazwisko',
      required: true
    },
    {
      name: 'role',
      type: 'text',
      label: 'Rola',
      required: true
    },
    {
      name: 'avatar',
      type: 'upload',
      label: 'Avatar',
      relationTo: 'media',
      required: true
    }
  ]
}

export default Authors
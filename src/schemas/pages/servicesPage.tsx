import { defineType } from 'sanity'

const servicesPage = defineType({
  name: 'page-services',
  type: 'document',
  title: 'Services page',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Meta description shown in search engines',
    },
  ],
})

export default servicesPage

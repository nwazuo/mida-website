import { defineType } from 'sanity'

const partnershipsPage = defineType({
  name: 'page-partnerships',
  type: 'document',
  title: 'Partnerships page',
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

export default partnershipsPage

import { defineType } from 'sanity'

const workPage = defineType({
  name: 'page-work',
  type: 'document',
  title: 'Work page',
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

export default workPage

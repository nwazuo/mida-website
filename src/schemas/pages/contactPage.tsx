import { defineType } from 'sanity'

const contactPage = defineType({
  name: 'page-contact',
  type: 'document',
  title: 'Contact page',
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

export default contactPage

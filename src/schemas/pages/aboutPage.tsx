import { defineType } from 'sanity'

const aboutPage = defineType({
  name: 'page-about',
  type: 'document',
  title: 'About page',
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

export default aboutPage

import { defineType } from 'sanity'

const homePage = defineType({
  name: 'page-home',
  type: 'document',
  title: 'Home page',
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

export default homePage

import { defineType } from 'sanity'

const page = defineType({
  name: 'page',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'Meta/SEO',
    }
  ],
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    },
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
  ]
})

export default page
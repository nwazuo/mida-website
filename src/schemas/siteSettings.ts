import { defineType } from 'sanity'

const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
      default: true,
    },
    {
      name: 'socials',
      title: 'Social links',
    },
    {
      name: 'contact',
      title: 'Contact details',
    },
  ],
  fields: [
    {
      name: 'defaultMeta',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      fields: [
        {
          name: 'defaultSiteTitle',
          title: 'Default site title',
          description: 'Default site title to show on search engines',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'defaultSiteDescription',
          title: 'Default site description',
          description: 'Default meta description to show on search engines',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'socials',
      title: 'Social links',
      type: 'object',
      group: 'socials',
      fields: [
        {
          name: 'twitter',
          type: 'url',
          title: 'Twitter URL',
        },
        {
          name: 'linkedin',
          type: 'url',
          title: 'LinkedIn URL',
        },
        {
          name: 'instagram',
          type: 'url',
          title: 'Instagram URL',
        },
      ],
    },
    {
      name: 'contact',
      title: 'Contact details',
      type: 'object',
      group: 'contact',
      fields: [
        {
          name: 'phone',
          type: 'string',
          title: 'Phone',
        },
        {
          name: 'email',
          type: 'string',
          title: 'Email address',
        },
        {
          name: 'address',
          type: 'string',
          title: 'Address',
        },
      ],
    },
  ],
})

export default siteSettings

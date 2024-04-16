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
    // {
    //   name: 'socials',
    //   title: 'Social links',
    // },
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
        {
          name: 'twitterHandle',
          title: 'Twitter handle',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    // {
    //   name: 'socials',
    //   title: 'Social links',
    //   type: 'array',
    //   group: 'socials',
    //   of: [
    //     {
    //       type: 'linkObject'
    //     }
    //   ]
    // },
  ],
})

export default siteSettings

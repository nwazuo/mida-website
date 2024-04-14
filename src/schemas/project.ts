const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'liveLink',
      title: 'Live link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cover',
      type: 'object',
      fields: [
        {
          name: 'photo',
          type: 'image',
          title: 'Project cover image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'crop',
          type: 'string',
          title: 'Crop',
          description:
            'Crop should correspond with the orientation of the image',
          initialValue: 'landscape',
          options: {
            list: [
              { title: 'Landscape', value: 'landscape' },
              { title: 'Portrait', value: 'portrait' },
            ],
            layout: 'radio',
          },
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      title: 'Published At',
      description: 'Latest published projects come first on the live website',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDescription',
      type: 'string',
      title: 'Short description',
      description: 'A one-line description of the project',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'services',
      type: 'array',
      title: 'Services',
      description: 'List of services offered in the project',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      validation: (Rule) => Rule.required(),
    },
  ],
}

export default project

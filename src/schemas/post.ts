const post = {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(10).max(100),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    {
      name: 'cover',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'This should describe the content of the image briefly',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {
              title: 'Heading 1',
              value: 'h2'
            },
            {
              title: 'Heading 2',
              value: 'h3'
            },
            {
              title: 'Heading 3',
              value: 'h4'
            },
          ]
        },
        {
          type: 'image',
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              options: { isHighlighted: true },
            },
            {
              name: 'alt',
              title: 'Alt text',
              type: 'string',
              options: { isHighlighted: true },
            },
          ],
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};

export default post
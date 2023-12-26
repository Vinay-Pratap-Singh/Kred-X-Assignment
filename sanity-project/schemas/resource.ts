export default {
  name: 'resources',
  type: 'document',
  title: 'Resources',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the resource',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
      description: 'Date of creation',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Resource thumbnail',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
  ],
}

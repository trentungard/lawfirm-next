import { defineType, defineField } from 'sanity'

export const aboutCard = defineType({
  type: "object",
  name: "aboutCard",
  fields: [
    defineField({
      type: "string",
      name: "name",
    }),
    defineField({
      type: "string",
      name: "position",
    }),
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "text",
      name: "description",
    }),
    defineField({
      type: "image",
      name: "photoOfIndividual"
    }),
  ],
});


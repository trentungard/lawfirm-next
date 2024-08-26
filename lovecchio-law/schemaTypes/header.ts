import { defineType, defineField } from 'sanity'

export const header = defineType({
  type: "object",
  name: "header",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "image",
      name: "backgroundImage",
      options: { hotspot: true },
    }),
    defineField({
      type: "image",
      name: "coverImage",
    }),
  ],
});


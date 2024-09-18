import { defineType, defineField } from 'sanity'

export const practiceItem = defineType({
  type: "object",
  name: "practiceItem",
  fields: [
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
      name: "icon",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "image",
      name: "backgroundImage",
    }),
  ],
});


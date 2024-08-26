import { defineType, defineField } from 'sanity'

export const contact = defineType({
  type: "object",
  name: "contact",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "string",
      name: "phoneNumber",
    }),
    defineField({
      type: "string",
      name: "email",
    }),
    defineField({
      type: "text",
      name: "description",
    }),
  ],
});


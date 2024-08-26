import { defineType, defineField, defineArrayMember } from 'sanity'

export const page = defineType({
  type: "document",
  name: "page",
  fields: [
    defineField({
      type: "header",
      name: "header",
    }),
    defineField({
      type: "practice",
      name: "practice",
    }),
    defineField({
      type: "array",
      name: "about",
      of: [
        defineArrayMember({
          type: "aboutCard",
        }),
      ],
    }),
    defineField({
      type: "contact",
      name: "contact",
    }),
  ],
});


import { defineType, defineField, defineArrayMember } from 'sanity'

export const practice = defineType({
  type: "object",
  name: "practice",
  fields: [
    defineField({
      type: "string",
      name: "sectionTitle",
    }),
    defineField({
      type: "array",
      name: "items",
      of: [
        defineArrayMember({
          type: "practiceItem",
        }),
      ],
    }),
  ],
});


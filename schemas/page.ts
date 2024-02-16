// ./schemas/page.ts

import { defineArrayMember, defineField, defineType } from "sanity";
import { icons } from "@sanity/icons"; // replace with the actual package where icons are imported from

export const page = defineType({
  name: "page",
  type: "document",
  title: "Page",
  icon: icons["document-text"], // use the specific icon from the icons object
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.trim().toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      of: [
        defineArrayMember({
          name: "hero",
          type: "hero",
        }),
        defineArrayMember({
          name: "textWithIllustration",
          type: "textWithIllustration",
        }),
        defineArrayMember({
          name: "gallery",
          type: "gallery",
        }),
        defineArrayMember({
          name: "form",
          type: "form",
        }),
        defineArrayMember({
          name: "video",
          type: "video",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
    },
    prepare(selection) {
      const { title, slug } = selection;
      return {
        title: title,
        subtitle: slug,
      };
    },
  },
});

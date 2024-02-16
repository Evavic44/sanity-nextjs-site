// schemas/navigation.ts
import { icons } from "@sanity/icons";

export default {
  name: "employee",
  title: "employee",
  type: "document",
  icons: icons["user"],
  preview: {
    select: {
      title: "title",
      media: "image",
      subtitle: "employeePosition.position",
    },
  },
  fields: [
    {
      name: "title",
      title: "Navn",
      description: "Navnet på medarbejder",
      type: "string",
    },
    {
      name: "employeePosition",
      title: "medarbejder Stilling",
      description: "Stillingen på medarbejderen",
      options: {
        collapsible: true,
        collapsed: true,
      },
      type: "object",
      fields: [
        {
          name: "position",
          title: "Position",
          type: "string",
        },
        {
          name: "Stilling",
          title: "stilling",
          type: "array",
          of: [
            {
              name: "positionTags",
              title: "PositionTags",
              type: "reference",
              to: [{ type: "position" }],
            },
          ],
        },
      ],
    },
    {
      name: "email",
      title: "Email",
      description: "Email til medarbejderen",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      description: "Telefonnummer til medarbejderen",
      type: "number",
    },
    {
      name: "image",
      options: {
        hotspot: true,
      },
      title: "Image",
      description: "Billede af medarbejderen",
      type: "image",
    },
  ],
};

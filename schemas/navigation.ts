// schemas/navigation.ts
import { icons } from "@sanity/icons";

export default {
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    {
      name: "links",
      title: "Navigation",
      type: "array",
      of: [
        {
          icon: icons["link"],
          type: "object",
          preview: {
            select: {
              title: "title",
              subtitle: "path",
            },
          },
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              description: "The title of the link",
            },
            {
              name: "path",
              title: "Route",
              type: "string",
              description: "The route of the link",
              hidden: ({ parent }: { parent: any }) => parent.external, // Hide this field if the parent is external
            },
            /* {
              name: "outgoingPath",
              title: "Route",
              type: "string",
              description: "The route of the link (outgoing)",
              initialValue: "https://",
              default: "https://",
              hidden: ({ parent }: { parent: any }) => !parent.external, // Hide this field if the parent is not external
            },
            {
              name: "external",
              title: "External",
              type: "boolean",
              description: "Check this if the link is external",
              initialValue: false,
            }, */
            {
              name: "subLinks",
              title: "Sub Links",
              type: "array",
              of: [
                {
                  type: "object",
                  preview: {
                    select: {
                      title: "subTitle",
                      subtitle: "subRoute",
                    },
                  },
                  icon: icons["link"],
                  fields: [
                    {
                      name: "subTitle",
                      title: "Title",
                      type: "string",
                    },
                    {
                      name: "subRoute",
                      title: "Route",
                      type: "string",
                    },
                   /*  {
                      name: "subExternal",
                      title: "External",
                      type: "boolean",
                      description: "Check this if the link is external",
                    }, */
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "title",
      title: "Site Title",
      type: "string",
    },
  ],
};

// schemas/navigation.ts
import { icons } from "@sanity/icons";

export default {
  name: "position",
  title: "position",
  type: "document",
  icons: icons["user"],
  fields: [
    {
      name: "title",
      title: "Navn",
      description: "Navnet på medarbejder",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      subtitle: "position",
    },
  },
};
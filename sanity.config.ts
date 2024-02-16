import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";
import { icons } from "@sanity/icons";
import { visionTool } from "@sanity/vision";

import { debugSecrets } from "@sanity/preview-url-secret/sanity-plugin-debug-secrets";

import { presentationTool } from "sanity/presentation";

export default defineConfig({
  name: "NST-Labs",
  icon: icons["documents"],
  title: "NST-Labs",
  projectId: "62jr7l83",
  dataset: "production",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Menu")
          .id("menu")
          .showIcons(true)
          .items([
            S.listItem()
              .title("Indhold")
              .icon(icons["documents"])
              .child(
                S.list()
                  .title("Indhold")
                  .items([
                    S.listItem()
                      .title("Sider")
                      .icon(icons["documents"])
                      .child(S.documentTypeList("page").title("Sider")),
                    /* S.listItem()
                      .title("Posts")
                      .icon(icons["document-text"])
                      .child(S.documentTypeList("post").title("Posts")),
                      S.listItem()
                      .title("Artikler")
                      .icon(icons["edit"])
                      .child(S.documentTypeList("article").title("Artikler")),
                    S.listItem()
                      .title("Blogindlæg")
                      .icon(icons["book"])
                      .child(S.documentTypeList("blog").title("Blogindlæg")),
                      S.listItem()
                      .title("Events")
                      .icon(icons["calendar"])
                      .child(S.documentTypeList("event").title("Events")), */
                  ])
              ),
            S.divider(),

            S.listItem()
              .title("Management")
              .icon(icons["menu"])
              .child(
                S.list()
                  .title("Management")
                  .items([
                    S.listItem()
                      .title("Medarbejdere")
                      .icon(icons["users"])
                      .child(
                        S.documentTypeList("employee").title("Medarbejdere")
                      ),
                    S.listItem()
                      .title("Stillinger")
                      .icon(icons["user"])
                      .child(
                        S.documentTypeList("position").title("Stillinger")
                      ),
                  ])
              ),
              S.listItem()
              .title("Indstillinger")
              .icon(icons["menu"])
              .child(
                S.list()
                  .title("Indstillinger")
                  .items([
                    S.listItem()
                    .title("Navigation")
                    .icon(icons["menu"])
                    .child(S.document().schemaType("navigation").documentId("navigation")),

                  ]),
              ),
            /*               S.listItem()
              .title("Indhold")
              .icon(icons["documents"])
              .child(
                S.list()
                  .title("Indhold")
                  .items([
                    S.listItem()
                      .title("Sider")
                      .icon(icons["documents"])
                      .child(S.documentTypeList("page").title("Sider")),
                  ])
              ),
              */
          ]),
    }),
    debugSecrets(),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: "/api/draft",
        },
      },
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});

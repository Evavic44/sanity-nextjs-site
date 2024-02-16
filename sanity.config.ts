import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";
import { icons } from "@sanity/icons";
import { visionTool } from "@sanity/vision";

import { debugSecrets } from "@sanity/preview-url-secret/sanity-plugin-debug-secrets";

import { scheduledPublishing } from "@sanity/scheduled-publishing";

import { media } from 'sanity-plugin-media'


// 1. Add the import to the theme.js you downloaded
import {theme as _theme} from './theme'

// 2. Assign typings to the theme
const theme = _theme as import('sanity').StudioTheme


import {structure} from "./structure";


export default defineConfig({
  theme, // <-- 3. add the theme here

  name: "NST-Labs",
  icon: icons["documents"],
  title: "NST-Labs",
  projectId: "62jr7l83",
  dataset: "production",
  basePath: "/studio",
  plugins: [
    
    structureTool({
      structure
    }),
    debugSecrets(),

    scheduledPublishing(),
    media(),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});

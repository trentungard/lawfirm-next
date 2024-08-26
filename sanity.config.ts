'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { schemaTypes } from './lovecchio-law/schemaTypes'

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: 'production',
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema: { types: schemaTypes },
  plugins: [
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: 'v2024-07-17'}),
  ],
})

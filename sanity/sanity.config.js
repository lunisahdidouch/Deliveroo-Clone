import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemas from './schemas/schemas.js'

export default defineConfig({
  name: 'default',
  title: 'DeliverooClone',

  projectId: 'lc4r95tl',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemas,
  },
})
 
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { apiVersion, dataset, projectId } from './env'
import { schema } from './schema'
import { customDesk } from './deskStructure'

export default defineConfig({
    basePath: '/admin',
    projectId,
    dataset,
    schema,
    plugins: [
        deskTool({structure: customDesk}),
        visionTool({ defaultApiVersion: apiVersion }),
    ],
})

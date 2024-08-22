// 'use client'

// /**
//  * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.jsx` route
//  */

// // import {visionTool} from '@sanity/vision'
// // import {defineConfig} from 'sanity'
// // import {structureTool} from 'sanity/structure'

// // // Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
// // import {apiVersion, dataset, projectId} from './src/sanity/env'
// // import {schema} from './src/app/studio/[[...tool]]/schemas/schema'
// // import {structure} from './src/sanity/structure'

// // export default defineConfig({
// //   basePath: '/studio',
// //   projectId:'7gq8uk9l',
// //   dataset:'mapdata',
// //   // Add and edit the content schema in the './sanity/schemaTypes' folder
// //   schema:schema,
// //   plugins: [
// //     structureTool({structure}),
// //     // Vision is for querying with GROQ from inside the Studio
// //     // https://www.sanity.io/docs/the-vision-plugin
// //     visionTool({defaultApiVersion: apiVersion}),
// //   ],
// // })


// import { defineConfig } from 'sanity';
// import { deskTool } from 'sanity/desk';
// import { visionTool } from '@sanity/vision'; // Import the visionTool plugin if you need it

// // Import the default schema
// import schema from './src/app/studio/[[...tool]]/schemas/schema';

// // Environment variables
// const apiVersion = '2024-08-21'; // Define your API version here or use an environment variable
// const projectId = "7gq8uk9l";
// const dataset = "mapdata";

// export default defineConfig({
//   name: 'default',
//   title: 'Sanity Project',

//   basePath: '/studio',
//   projectId: projectId,
//   dataset: dataset,

//   // Specify the schema types
//   schema: {
//     types: schema, // Use the default schema
//   },

//   plugins: [
//     deskTool(), // Add the deskTool plugin
//     visionTool({ defaultApiVersion: apiVersion }), // Add visionTool plugin if querying with GROQ
//     // Add any other Sanity plugins here if needed
//   ],
// });




// src/sanity.config.js
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision'; // Import the visionTool plugin if you need it

// Import your schema types
import { schemaTypes } from './src/app/studio/[[...tool]]/schemas/schema';

// Environment variables
const apiVersion = '2024-08-21'; // Define your API version here or use an environment variable
const projectId = '7gq8uk9l'; // Replace with your actual project ID
const dataset = 'mapdata'; // Replace with your dataset name

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  basePath: '/studio', // Base path for the Studio

  projectId: projectId, // Your Sanity project ID
  dataset: dataset, // Your dataset name

  // Specify the schema types
  schema: {
    types: schemaTypes, // Use the named export for schema types
  },

  // Add plugins you need
  plugins: [
    deskTool(), // Add the deskTool plugin
    visionTool({ defaultApiVersion: apiVersion }), // Add visionTool plugin if querying with GROQ
    // Add any other Sanity plugins here if needed
  ],
});


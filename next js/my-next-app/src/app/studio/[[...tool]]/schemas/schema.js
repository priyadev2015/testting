// src/app/studio/schemas/schema.js
import { defineType, defineField } from 'sanity';

// Define your schema types
export const schemaTypes = [
  defineType({
    name: 'poi',
    title: 'Point of Interest',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
        
      }),
      defineField({
        name: 'location',
        title: 'Location',
        type: 'geopoint',
      
      }),
      defineField({
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            { title: 'Restaurant', value: 'restaurant' },
            { title: 'Park', value: 'park' },
            { title: 'Museum', value: 'museum' },
            { title: 'Shopping', value: 'shopping' },
            // Add more categories as needed
          ],
        },
      }),
      defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          defineField({
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
          
          }),
        ],
      }),
      defineField({
        name: 'address',
        title: 'Address',
        type: 'string',
      }),
    ],
  }),
  // Add other schema types here
];

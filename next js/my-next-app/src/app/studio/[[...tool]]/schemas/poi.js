// src/app/studio/schemas/poi.js
import { defineType, defineField } from 'sanity';

export default defineType({
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
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    }),
    // Add other fields as needed
  ],
});

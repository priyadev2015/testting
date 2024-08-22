import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: "7gq8uk9l",
  dataset: "mapdata",
  apiVersion: '2024-08-25',
  useCdn: false,
});

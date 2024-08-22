import { createClient } from 'next-sanity';

// Read environment variables
const projectId = "7gq8uk9l";
const dataset = "mapdata";
const apiVersion = "2025-08-21"; // Correct date format

if (!projectId || !dataset || !apiVersion) {
  throw new Error('Missing Sanity environment variables');
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false for development
});

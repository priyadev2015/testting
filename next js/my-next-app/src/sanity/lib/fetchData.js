// src/sanity/lib/fetchData.js
import { client } from './client'; // Adjust the path if necessary

export async function fetchPOIs(bounds) {
  const query = `
    *[_type == "poi" && 
      location.lat >= ${bounds.south} &&
      location.lat <= ${bounds.north} &&
      location.lng >= ${bounds.west} &&
      location.lng <= ${bounds.east}
    ]{
      _id,
      title,
      description,
      location,
      category,
      image {
        asset-> {
          url
        }
      },
      address
    }
  `;
  return client.fetch(query);
}

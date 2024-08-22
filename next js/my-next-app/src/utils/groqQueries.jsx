// src/lib/groqQueries.js

export const getPOIs = (bounds) => {
  return `
    *[_type == "poi" && 
      location.lat >= ${bounds.sw.lat} && 
      location.lat <= ${bounds.ne.lat} &&
      location.lng >= ${bounds.sw.lng} && 
      location.lng <= ${bounds.ne.lng}
    ]{
      _id,
      title,
      description,
      location
    }
  `;
};

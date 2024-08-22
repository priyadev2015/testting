
// 'use client';
// import React, { useState } from 'react';

// import Image from 'next/image';
// import Map from "../app/components/Map" // Import your Map component

// export default function Home() {
//   // Example state for map center and zoom
//   const [mapCenter, setMapCenter] = useState({ lat: 40.712776, lng: -74.005974 }); // New York City coordinates
//   const [zoomLevel, setZoomLevel] = useState(10);

//   return (
//     <main>

//       {/* Add the Map component here */}
//       <section className="w-full max-w-5xl mx-auto p-6">
//         <h2 className="text-2xl font-semibold mb-4">Map Component</h2>
//         <Map  />
//       </section>
//     </main>
//   );
// }

// 'use client'; 

// import { useState, useEffect } from 'react';
// import Map from '../app/components/Map';
// import { fetchPointsOfInterest } from '../sanity/lib/fetchData'; // Function to fetch data

// const HomePage = () => {
//   const [bounds, setBounds] = useState({
//     sw: { lat: -90, lng: -180 },
//     ne: { lat: 90, lng: 180 },
//     center: { lat: 0, lng: 0 },
//   });

//   const [points, setPoints] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchPointsOfInterest(bounds);
//       setPoints(data);
//     };
//     fetchData();
//   }, [bounds]);

//   const onMapBoundsChange = (newBounds) => {
//     setBounds(newBounds);
//   };

//   return (
//     <div style={{ display: 'flex', height: '100vh' }}>
//       <div style={{ width: '50%' }}>
//         {/* Render list of points or other content */}
//         {points.map(point => (
//           <div key={point._id}>
//             <h3>{point.title}</h3>
//             {/* More details or actions */}
//           </div>
//         ))}
//       </div>
//       <div style={{ width: '50%' }}>
//         <Map bounds={bounds} onBoundsChange={onMapBoundsChange} />
//       </div>
//     </div>
//   );
// };

// export default HomePage;



'use client'; 
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Map from '../app/components/Map'; // Adjust the import path as necessary

export default function MapContainer() {
  const { query } = useRouter();
  const [bounds, setBounds] = useState({
    sw: { lat: -90, lng: -180 },
    ne: { lat: 90, lng: 180 },
    center: { lat: 37.7749, lng: -122.4194 },
  });

  useEffect(() => {
    if (query) {
      setBounds({
        sw: { lat: parseFloat(query.sw_lat), lng: parseFloat(query.sw_lng) },
        ne: { lat: parseFloat(query.ne_lat), lng: parseFloat(query.ne_lng) },
        center: { lat: parseFloat(query.center_lat), lng: parseFloat(query.center_lng) },
      });
    }
  }, [query]);

  const handleBoundsChange = (newBounds) => {
    setBounds(newBounds);
  };

  return <Map initialBounds={bounds} onBoundsChange={handleBoundsChange} />;
}

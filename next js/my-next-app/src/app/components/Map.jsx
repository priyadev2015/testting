
// 'use client';
// import React, { useState, useEffect, useCallback } from 'react';
// import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
// import { fetchPOIs } from '../../sanity/lib/fetchData'; // Adjust the path if needed

// const mapContainerStyle = {
//   height: '100vh',
//   width: '70%', // Adjust width as needed
//   float: 'left', // Align map to the left
// };

// const listContainerStyle = {
//   height: '100vh',
//   width: '30%', // Adjust width as needed
//   float: 'right', // Align list to the right
//   overflowY: 'scroll', // Allow scrolling if the list is long
//   padding: '10px',
//   boxSizing: 'border-box', // Ensure padding does not affect width
// };

// const center = { lat: 37.7749, lng: -122.4194 }; // Default center

// function Map() {
//   const [map, setMap] = useState(null);
//   const [pois, setPois] = useState([]);
//   const [selectedPoi, setSelectedPoi] = useState(null);

//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY, // Ensure correct environment variable
//   });

//   const onLoad = useCallback((map) => {
//     setMap(map);
//   }, []);

//   const onBoundsChanged = useCallback(async () => {
//     if (map) {
//       const bounds = map.getBounds();
//       if (bounds) {
//         const northEast = bounds.getNorthEast();
//         const southWest = bounds.getSouthWest();
//         if (northEast && southWest) {
//           const boundsData = {
//             north: northEast.lat(),
//             south: southWest.lat(),
//             east: northEast.lng(),
//             west: southWest.lng(),
//           };
//           try {
//             const data = await fetchPOIs(boundsData);
//             console.log('Fetched POIs:', data); // Debug log
//             setPois(data);
//           } catch (error) {
//             console.error('Error fetching POIs:', error);
//           }
//         }
//       }
//     }
//   }, [map]);

//   useEffect(() => {
//     if (map) {
//       onBoundsChanged(); // Ensure map is fully loaded before calling this
//       const listener = map.addListener('bounds_changed', onBoundsChanged);
//       return () => {
//         google.maps.event.removeListener(listener);
//       };
//     }
//   }, [map, onBoundsChanged]);

//   if (!isLoaded) return <div>Loading...</div>;

//   return (
//     <div style={{ display: 'flex' }}>
//       {/* Map Component */}
//       <div style={mapContainerStyle}>
//         <GoogleMap
//           mapContainerStyle={{ height: '100%', width: '100%' }}
//           center={center}
//           zoom={10}
//           onLoad={onLoad}
//         >
//           {pois.map((poi) => (
//             <Marker
//               key={poi._id}
//               position={{ lat: poi.location.lat, lng: poi.location.lng }}
//               onClick={() => setSelectedPoi(poi)}
//               icon={{
//                 url: poi.image ? poi.image.asset.url : 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', // Custom or default icon
//                 scaledSize: new window.google.maps.Size(32, 32), // Adjust size as needed
//               }}
//             />
//           ))}
//           {selectedPoi && (
//             <InfoWindow
//               position={{ lat: selectedPoi.location.lat, lng: selectedPoi.location.lng }}
//               onCloseClick={() => setSelectedPoi(null)}
//             >
//               <div>
//                 <h2>{selectedPoi.title}</h2>
//                 <p>{selectedPoi.description}</p>
//                 <p><strong>Category:</strong> {selectedPoi.category}</p>
//                 <p><strong>Address:</strong> {selectedPoi.address}</p>
//               </div>
//             </InfoWindow>
//           )}
//         </GoogleMap>
//       </div>

//       {/* List Component */}
//       <div style={listContainerStyle}>
//         <h2>Points of Interest</h2>
//         <ul>
//           {pois.map((poi) => (
//             <li
//               key={poi._id}
//               onClick={() => {
//                 setSelectedPoi(poi);
//                 // Optionally, scroll the map to the selected POI
//                 if (map) {
//                   map.panTo({ lat: poi.location.lat, lng: poi.location.lng });
//                 }
//               }}
//               style={{ cursor: 'pointer', padding: '10px', borderBottom: '1px solid #ddd' }}
//             >
//               <h1> Title : {poi.title}</h1>
//               <h2> Description:  {poi.description}</h2>
//               <h2>  Category: <strong>Category:</strong> {poi.category}</h2>
//               <h2>  Address  :<strong>Address:</strong> {poi.address}</h2>
//               {poi.image && <img src={poi.image.asset.url} alt={poi.title} style={{ maxWidth: '100%', height: 'auto' }} />}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Map;




'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { fetchPOIs } from '../../sanity/lib/fetchData'; // Adjust the path if needed

const mapContainerStyle = {
  height: '100vh',
};

const listContainerStyle = {
  overflowY: 'scroll', // Allow scrolling if the list is long
  padding: '10px',
  boxSizing: 'border-box', // Ensure padding does not affect width
};

const center = { lat: 37.7749, lng: -122.4194 }; // Default center

function Map() {
  const [map, setMap] = useState(null);
  const [pois, setPois] = useState([]);
  const [selectedPoi, setSelectedPoi] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY, // Ensure correct environment variable
  });

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onBoundsChanged = useCallback(async () => {
    if (map) {
      const bounds = map.getBounds();
      if (bounds) {
        const northEast = bounds.getNorthEast();
        const southWest = bounds.getSouthWest();
        if (northEast && southWest) {
          const boundsData = {
            north: northEast.lat(),
            south: southWest.lat(),
            east: northEast.lng(),
            west: southWest.lng(),
          };
          try {
            const data = await fetchPOIs(boundsData);
            console.log('Fetched POIs:', data); // Debug log
            setPois(data);
          } catch (error) {
            console.error('Error fetching POIs:', error);
          }
        }
      }
    }
  }, [map]);

  useEffect(() => {
    if (map) {
      onBoundsChanged(); // Ensure map is fully loaded before calling this
      const listener = map.addListener('bounds_changed', onBoundsChanged);
      return () => {
        google.maps.event.removeListener(listener);
      };
    }
  }, [map, onBoundsChanged]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className='container' style={{paddingInline:'50px'}} >    
      {/* Map Component */}
     

      {/* List Component */}
      <div className='test-main-div' style={{display:'flex'}}>
          <div className='first-box' style={{width: '65%'}}>
          <div style={listContainerStyle}>
            <h2 style={{fontSize:'24px', textTransform: 'uppercase', color:'#333', lineHeight:'20px', textAlign:'center', paddingTop:'20px', paddingBottom:'20px'}}>Points of Interest</h2>
            <ul style={{display:'flex', justifyContent:'space-around'}}>
              {pois.map((poi) => (
                <li
                  key={poi._id}
                  onClick={() => {
                    setSelectedPoi(poi);
                    // Optionally, scroll the map to the selected POI
                    if (map) {
                      map.panTo({ lat: poi.location.lat, lng: poi.location.lng });
                    }
                  }}
                  style={{ cursor: 'pointer', padding: '10px', borderBottom: '1px solid #ddd' }}
                >
                  <h1 style={{fontSize:'20px'}}> Title : {poi.title}</h1>
                  {poi.image && (
                    <img
                      src={poi.image.asset.url}
                      alt={poi.title}
                      style={{ maxWidth: '250px', height: '200px', cursor: 'pointer', borderRadius: '15px' }}
                      onClick={() => setModalImage(poi.image.asset.url)}
                    />
                  )}
                  <h2 style={{fontSize:'14px', color:'#333', lineHeight:'20px'}}> Description: {poi.description}</h2>
                  <h2 style={{fontSize:'14px', color:'#333', lineHeight:'20px'}}> Category: <strong>{poi.category}</strong></h2>
                  <h2 style={{fontSize:'14px', color:'#333', lineHeight:'20px'}}> Address: <strong>{poi.address}</strong></h2>
                
                </li>
              ))}
            </ul>
          </div>
          </div>

          <div className='map-div' style={{width: '35%'}}>
          <div style={mapContainerStyle}>
            <GoogleMap
              mapContainerStyle={{ height: '100%', width: '100%' }}
              center={center}
              zoom={10}
              onLoad={onLoad}
            >
              {pois.map((poi) => (
                <Marker
                  key={poi._id}
                  position={{ lat: poi.location.lat, lng: poi.location.lng }}
                  onClick={() => setSelectedPoi(poi)}
                  icon={{
                    url: poi.image ? poi.image.asset.url : 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', // Custom or default icon
                    scaledSize: new window.google.maps.Size(32, 32), // Adjust size as needed
                  }}
                />
              ))}
              {selectedPoi && (
                <InfoWindow
                  position={{ lat: selectedPoi.location.lat, lng: selectedPoi.location.lng }}
                  onCloseClick={() => setSelectedPoi(null)}
                >
                  <div>
                    <h2>{selectedPoi.title}</h2>
                    <p>{selectedPoi.description}</p>
                    <p><strong>Category:</strong> {selectedPoi.category}</p>
                    <p><strong>Address:</strong> {selectedPoi.address}</p>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </div>
          </div>
      </div>
    

      {/* Modal for Images */}
      {modalImage && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.content}>
            <img src={modalImage} alt="POI" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            <button onClick={() => setModalImage(null)} style={modalStyles.closeButton}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

// Styles for the modal
const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },

  content: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    position: 'relative',
    maxWidth: '90%',
    maxHeight: '80%',
    overflow: 'hidden',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'red',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 10px',
    cursor: 'pointer',
  },

};

export default Map;

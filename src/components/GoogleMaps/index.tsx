import React, { useState } from 'react';
import {
  GoogleMap,
  GoogleMapProps,
  InfoWindow,
  Marker,
} from '@react-google-maps/api';

const markers = [
  {
    id: 1,
    name: 'Chicago, Illinois',
    position: { lat: 41.881832, lng: -87.623177 },
  },
  {
    id: 2,
    name: 'Denver, Colorado',
    position: { lat: 39.739235, lng: -104.99025 },
  },
  {
    id: 3,
    name: 'Los Angeles, California',
    position: { lat: 34.052235, lng: -118.243683 },
  },
  {
    id: 4,
    name: 'New York, New York',
    position: { lat: 40.712776, lng: -74.005974 },
  },
];

export function GoogleMaps() {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker: any) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map: any) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  // Pega o height da tela meno 80px
  const height = window.innerHeight - 80;

  return (
    <GoogleMap
      zoom={8}
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: '100%', height }}
      options={{
        fullscreenControl: false,
        mapTypeControl: false,
      }}
    >
      {markers.map(({ id, name, position }) => (
        <Marker
          key={id}
          options={{ icon: 'https://i.imgur.com/9G5JOp8.png' }}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  );
}

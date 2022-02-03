import { useEffect, useState } from 'react';
import {
  GoogleMap,
  GoogleMapProps,
  InfoWindow,
  Marker,
} from '@react-google-maps/api';
import axios from 'axios';

export function GoogleMaps() {
  const [imoveis, setImoveis] = useState([]);
  const [activeMarker, setActiveMarker] = useState(null);

  useEffect(() => {
    const axiosImoveis = async () => {
      const response = await axios.get(
        'http://api.investmall.b2ml.com.br/imovel'
      );
      setImoveis(response.data.data);
    };
    axiosImoveis();
  }, []);

  const handleActiveMarker = (marker: any) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map: any) => {
    const bounds = new google.maps.LatLngBounds();
    imoveis.forEach((imovel: any) =>
      bounds.extend({ lat: imovel.endereco.lat, lng: imovel.endereco.lng })
    );
    map.fitBounds(bounds);
  };

  // Pega o height da tela meno 80px
  const height = window.innerHeight - 80;

  return (
    <GoogleMap
      zoom={4}
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: '100%', height }}
      center={{ lat: -23.5489, lng: -46.6388 }}
      options={{
        fullscreenControl: false,
        mapTypeControl: false,
      }}
    >
      {imoveis.map((imovel: any) => (
        <Marker
          key={imovel.id}
          options={{ icon: 'https://i.imgur.com/9G5JOp8.png' }}
          position={{ lat: imovel.endereco.lat, lng: imovel.endereco.lng }}
          onClick={() => handleActiveMarker(imovel.id)}
        >
          {activeMarker === imovel.id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{imovel.endereco.rua}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  );
}

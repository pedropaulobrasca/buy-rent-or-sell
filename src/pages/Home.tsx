import { useLoadScript } from '@react-google-maps/api';
import { GoogleMaps } from '../components/GoogleMaps';
import { Header } from '../components/Header';

export function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyB_9A_6Fg-iLJuF0haMGLGpVhU71j7jh3o',
  });
  return (
    <>
      <Header />
      {isLoaded && <GoogleMaps />}
    </>
  );
}

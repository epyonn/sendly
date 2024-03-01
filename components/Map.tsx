import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Image } from 'react-native';

interface Gym {
  id: string;
  latitude: number;
  longitude: number;
  image: any;
}

import gw from '../assets/gwpower-co-icon.png';
import iw from '../assets/berkeley.png';

const gyms: Gym[] = [
  { id: 'Great Western Power Co.', latitude: 37.80985, longitude: -122.26999, image: gw },
  { id: 'Ironworks', latitude: 37.85076, longitude: -122.29305, image: iw },
];

const calculateRegion = () => {
  let minLat = gyms[0].latitude;
  let maxLat = gyms[0].latitude;
  let minLng = gyms[0].longitude;
  let maxLng = gyms[0].longitude;

  gyms.forEach((gym) => {
    minLat = Math.min(minLat, gym.latitude);
    maxLat = Math.max(maxLat, gym.latitude);
    minLng = Math.min(minLng, gym.longitude);
    maxLng = Math.max(maxLng, gym.longitude);
  });

  const midLat = (minLat + maxLat) / 2;
  const midLng = (minLng + maxLng) / 2;
  const latitudeDelta = maxLat - minLat + 0.05; // Added some padding
  const longitudeDelta = maxLng - minLng + 0.05; // Added some padding

  return {
    latitude: midLat,
    longitude: midLng,
    latitudeDelta,
    longitudeDelta,
  };
};

const Map: React.FC = () => {
  

  return (
    <MapView style={styles.map} initialRegion={calculateRegion()}>
      {gyms.map((gym) => (
        <Marker
          key={gym.id}
          coordinate={{ latitude: gym.latitude, longitude: gym.longitude }}
          title={`${gym.id}`}
        >
          <Image source={gym.image} style={{ width: 50, height: 50 }} />
        </Marker>
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default Map;

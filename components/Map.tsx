import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Image } from 'react-native';


interface Gym {
  id: string;
  latitude: number;
  longitude: number;
  image: any;
}
import gw1 from '../assets/GWPC.png';
import gw2 from '../assets/gwpower-co-icon.png';


const gyms: Gym[] = [
  { id: '3', latitude: 37.78825, longitude: -122.4324, image: gw1 },
  { id: '2', latitude: 37.788825, longitude: -122.4324, image: gw2 },
  // Add more gyms as needed
];

const Map: React.FC = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {gyms.map((gym) => (
        <Marker
          key={gym.id}
          coordinate={{ latitude: gym.latitude, longitude: gym.longitude }}
          title={`Gym ${gym.id}`}
        >
            <Image source={gym.image} style={{ width: 150, height: 150 }} />
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

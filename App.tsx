import React from 'react';
import { View, StyleSheet } from 'react-native';
import Map from './components/Map'; 
import NavBar from './components/AppNavigator';

function App(): React.JSX.Element {
  return (
    <NavBar />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1, // Takes all available space leaving only necessary space for NavBar
  },
  navBarContainer: {
    height: 60, // Adjust based on the height of your NavBar
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default App;

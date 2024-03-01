  // NavBar.tsx
  import React from 'react';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import { NavigationContainer } from '@react-navigation/native';
  import { Text, View, StyleSheet } from 'react-native';
  import Maps from './Map'

  const Tab = createBottomTabNavigator();

  // Dummy screens for demonstration
  function HomeScreen() {
    return (
      <View style={styles.screen}>
        <Text>Home Screen</Text>
      </View>
    );
  }

  function SettingsScreen() {
    return (
      <View style={styles.screen}>
        <Text>Settings Screen</Text>
      </View>
    );
  }

  function ProfileScreen() {
    return (
      <View style={styles.screen}>
        <Text>Profile Screen</Text>
      </View>
    );
  }

  const AppNavigator: React.FC = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Gyms" component={Maps} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  export default AppNavigator;


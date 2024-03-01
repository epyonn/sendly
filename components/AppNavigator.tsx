import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import Maps from './Map';
import AnimatedDonutChart from './AnimatedDonutChart';

const Tab = createBottomTabNavigator();

function Rankings() {
  const isFocused = useIsFocused();
  const [key, setKey] = useState(0); // Initialize a state to hold the key

  useEffect(() => {
    if (isFocused) {
      // When the tab is focused, update the key to force re-render the AnimatedDonutChart
      setKey(prevKey => prevKey + 1);
    }
  }, [isFocused]); // Depend on isFocused to re-run this effect

  return (
    <View style={styles.screen}>
      {/* Apply the key to AnimatedDonutChart to force re-render when key changes */}
      <AnimatedDonutChart key={key} />
      
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

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('../assets/profile.png') : require('../assets/profile.png')}
                style={styles.icon}
              />
            ),
            tabBarLabel: 'Profile',
          }}
        />
        <Tab.Screen
          name="Rankings"
          component={Rankings}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('../assets/rankings.png') : require('../assets/rankings.png')}
                style={styles.icon}
              />
            ),
            tabBarLabel: 'Rankings',
          }}
        />
        <Tab.Screen
          name="Gyms"
          component={Maps}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('../assets/gym.png') : require('../assets/gym.png')}
                style={styles.icon}
              />
            ),
            tabBarLabel: 'Gyms',
          }}
        />
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
  icon: {
    width: 25,
    height: 25,
  },
});

export default AppNavigator;

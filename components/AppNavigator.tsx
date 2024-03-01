import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import Maps from './Map';

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
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <Image 
              source={focused ? require('../assets/profile.png') : require('../assets/profile.png')} 
              style={styles.icon} 
              />
            ),
            tabBarLabel: 'Home'
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <Image 
              source={focused ? require('../assets/profile.png') : require('../assets/profile.png')} 
              style={styles.icon} 
              />
            ),
            tabBarLabel: 'Settings'
          }}
        />
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
            tabBarLabel: 'Profile'
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
            tabBarLabel: 'Gyms'
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
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  icon: {
    width: 25, // Adjust the size of the icon as needed
    height: 25,
  },
});



export default AppNavigator;

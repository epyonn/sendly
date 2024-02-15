import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Gyms from './Gyms';
import Rankings from './Rankings';
import Sends from './Sends';

type RootTabParamList = {
    Gym: undefined;
    Rankings: undefined;
    Sends: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => (({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName: string = 'questionmark';

                        if (route.name === 'Gym') {
                            iconName: focused ? 'dumbbell' : 'dumbbell';
                        } else if (route.name === 'Rankings') {
                            iconName: focused ? 'podium-gold' : 'podium-gold';
                        } else if (route.name === 'Sends') {
                            iconName: focused ? 'send' : 'send';
                        }

                        return <Icon name={iconName} size={size} color={color} />;
                    }
                }))}
            >
                <Tab.Screen name="Gym" component={Gyms} />
                <Tab.Screen name="Rankings" component={Rankings} />
                <Tab.Screen name="Sends" component={Sends} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
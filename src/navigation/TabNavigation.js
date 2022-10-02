import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Account from '../screens/Account';
import Home from '../screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerTitleAlign: 'center',
        headerShown: true,
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'Main') {
            iconName = 'home-outline';
          } else if (route.name === 'Account') {
            iconName = 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Main" component={Home} options={{title: 'Home'}} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieDetail from '../screens/MovieDetail';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({route}) => ({
          headerShown: route.name === 'MovieDetail' ? true : false,
        })}>
        <Stack.Screen name="Home" component={TabNavigation} />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetail}
          options={{
            title: 'Movie Detail',
            headerBackTitleVisible: true,
            headerBackTitle: 'Home',
            headerTintColor: '#505050',
            headerTitleAlign: 'center',
            headerStyle: {
              borderBottomColor: 'black',
              shadowColor: 'black',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

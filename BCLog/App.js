import React from 'react'
import {View, Text, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from './Screens/HomeScreen'
import DetailScreen from './Screens/DetailScreen'
import ListScreen from './Screens/ListScreen'

const ListStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ListStackScreen() {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="List Data" component={ListScreen}/>
      <ListStack.Screen name="Detail Data" component={DetailScreen}/>
    </ListStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{activeTintColor: 'black'}}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel:"Home",
            tabBarIcon:({ color, size }) => (
              <FontAwesome5 name="newspaper" color={color} size={24}/>
            )
          }}
        />
        <Tab.Screen
          name="List"
          component={ListStackScreen}
          options={{
            tabBarLabel:"List",
            tabBarIcon:({ color, size }) => (
              <FontAwesome5 name="home" color={color} size={24}/>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

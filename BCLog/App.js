import React from 'react'
import {View, Text, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from './Screens/HomeScreen'
import DetailScreen from './Screens/DetailScreen'
import ListScreen from './Screens/ListScreen'
import FormScreen from './Screens/FormScreen'
import EditScreen from './Screens/EditScreen'

const ListStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ListStackScreen() {
  return (
    <ListStack.Navigator
    headerMode="screen">
      <ListStack.Screen 
        name="List Data" 
        component={ListScreen} 
        options={{headerShown: false}}
      />
      <ListStack.Screen 
        name="Detail Data" 
        component={DetailScreen} 
        options={{headerStyle: {
            backgroundColor: "transparent",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
        }}}
      />
      <ListStack.Screen 
        name="Input Data" 
        component={FormScreen}
        options={{headerStyle: {
            backgroundColor: "transparent",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
        }}}
      />
      <ListStack.Screen 
        name="Edit Data" 
        component={EditScreen}
        options={{headerStyle: {
            backgroundColor: "transparent",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
        }}}
      />
    </ListStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{activeTintColor: '#007DAB'}}
      >
        <Tab.Screen
          name="List"
          component={ListStackScreen}
          options={{
            tabBarLabel:"List",
            tabBarIcon:({ color, size }) => (
              <FontAwesome5 name="list" color={color} size={24}/>
            )
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel:"Home",
            tabBarIcon:({ color, size }) => (
              <FontAwesome5 name="chart-line" color={color} size={24}/>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

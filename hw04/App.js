import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import PostDrawer from "./src/components/post/PostDrawer";
import UserDrawer from "./src/components/user/UserDrawer";
import CameraAndroid from "./src/components/camera/CameraAndroid";

const BottomTabNavigator = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator.Navigator
          // tabBarOptions={{tabStyle: {justifyContent: 'center', alignItems: 'center'}}}
      >
        <BottomTabNavigator.Screen name={'posts'} component={PostDrawer}/>
        <BottomTabNavigator.Screen name={'users'} component={UserDrawer}/>
        <BottomTabNavigator.Screen name={'camera'} component={CameraAndroid} options={{unmountOnBlur: true}}/>
      </BottomTabNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});


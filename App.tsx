import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReactComp from './src/ReactComp';
import ReactNativeComp from './src/ReactNativeComp';
import NodeComp from './src/NodeComp';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/Splash';

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const HomeStack=()=>{
    return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarIconStyle: { display: "none" },tabBarLabelStyle: {
      fontWeight: "700",
      fontSize: 15,
      marginBottom:15
    },}}>
      <Tab.Screen name="React" component={ReactComp} />
      <Tab.Screen name="ReactNative" component={ReactNativeComp}/>
      <Tab.Screen name="Node" component={NodeComp} />
    </Tab.Navigator>)
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Home' component={HomeStack}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;

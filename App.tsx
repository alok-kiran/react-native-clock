import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import WorldClock from './compoents/WorldClock';
import StopWatch from './compoents/StopWatch';
import Timers from './compoents/Timers';
import Alarms from './compoents/Alarms';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="WorldClock"
        screenOptions={({route}) => ({
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen
          name="WorldClock"
          component={WorldClock}
          options={{
            tabBarLabel: 'WorldClock',
            title: 'WorldClock',
          }}
        />
        <Tab.Screen
          name="StopWatch"
          component={StopWatch}
          options={{
            tabBarLabel: 'StopWatch',
            title: 'StopWatch',
          }}
        />
        <Tab.Screen
          name="Timers"
          component={Timers}
          options={{
            tabBarLabel: 'Timers',
            title: 'Timers',
          }}
        />
        <Tab.Screen
          name="Alarms"
          component={Alarms}
          options={{
            tabBarLabel: 'Alarms',
            title: 'Alarms',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

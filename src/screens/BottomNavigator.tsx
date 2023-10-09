import {View, Text, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import API from './bottom/API';
import Info from './bottom/Info';
import Setting from './bottom/Setting';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator activeColor={'tomato'} inactiveColor={'white'}>
      <Tab.Screen
        name="API"
        component={API}
        options={{
          tabBarLabel: () => null,
          headerLeft: () => (
            <Image
              style={{width: 30, height: 30, margin: 20}}
              source={require('../assets/icons/menu_5259008.png')}
            />
          ),
          headerTitle: () => (
            <Image
              style={{width: 75, height: 50}}
              source={require('../assets/icons/icons8-marvel-100.png')}
            />
          ),
          headerRight: () => (
            <Image
              style={{width: 30, height: 30, margin: 20}}
              source={require('../assets/icons/search_2801881-2.png')}
            />
          ),
          tabBarIcon: () => (
            <Image
              style={{width: 30, height: 30, margin: 20}}
              source={require('../assets/icons/favorite_2550361.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={Info}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <Image
              style={{width: 30, height: 30, margin: 20}}
              source={require('../assets/icons/user_2550425.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <Image
              style={{width: 30, height: 30, margin: 20}}
              source={require('../assets/icons/settings_2550394.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

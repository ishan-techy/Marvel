import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import API from './bottom/API';
import Info from './bottom/Info';
import Setting from './bottom/Setting';

const Tab = createBottomTabNavigator();

const APIOptions = {
  tabBarLabel: () => null,
  headerLeft: () => (
    <Image
      style={styles.image}
      source={require('../assets/icons/menu_5259008.png')}
    />
  ),
  headerTitle: () => (
    <Image
      style={styles.main}
      source={require('../assets/icons/icons8-marvel-100.png')}
    />
  ),
  headerTitleAlign: 'center',
  headerRight: () => (
    <Image
      style={styles.image}
      source={require('../assets/icons/search_2801881-2.png')}
    />
  ),
  tabBarIcon: () => (
    <Image
      style={styles.image}
      source={require('../assets/icons/favorite_2550361.png')}
    />
  ),
};

const MeOptions = {
  tabBarLabel: () => null,
  tabBarIcon: () => (
    <Image
      style={styles.image}
      source={require('../assets/icons/user_2550425.png')}
    />
  ),
};

const SettingOptions = {
  tabBarLabel: () => null,
  tabBarIcon: () => (
    <Image
      style={styles.image}
      source={require('../assets/icons/settings_2550394.png')}
    />
  ),
};

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="API" component={API} options={APIOptions} />
      <Tab.Screen name="Me" component={Info} options={MeOptions} />
      <Tab.Screen name="Setting" component={Setting} options={SettingOptions} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    margin: 20,
  },
  main: {
    width: 75,
    height: 50,
  },
});

export default BottomNavigator;

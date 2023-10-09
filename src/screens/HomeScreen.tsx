import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import BottomNavigator from './BottomNavigator';

const {width, height} = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <BottomNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

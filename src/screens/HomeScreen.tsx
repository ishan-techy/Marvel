import {View, StyleSheet} from 'react-native';
import React from 'react';
import BottomNavigator from './BottomNavigator';

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

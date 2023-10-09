import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {removeItem} from '../../utils/asyncStorage';
import ToggleSwitch from 'toggle-switch-react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');
const Setting = () => {
  const navigation = useNavigation();
  const handleReset = async () => {
    await removeItem('onboarded');
    navigation.push('Onboarding');
  };
  return (
    <View style={styles.container}>
      <View style={styles.list0}>
        <TouchableOpacity style={styles.text} onPress={handleReset}>
          <Text>Dark Mode</Text>
        </TouchableOpacity>
        <ToggleSwitch
          style={styles.toggle}
          isOn={false}
          onColor="#634fc9"
          offColor="#ecf0f1"
          labelStyle={{color: 'black', fontWeight: '900'}}
          size="medium"
          onToggle={isOn => console.log('changed to : ', isOn)}
        />
      </View>
      <View style={styles.list}>
        <TouchableOpacity onPress={handleReset}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list0: {
    height: width * 0.12,
    backgroundColor: 'white',
    margin: 10,
    marginBottom: 0,
    borderRadius: 10,
    alignItems: 'center',
    fontWeight: '900',
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  text: {flex: 10},
  toggle: {flex: 2},
  list: {
    height: width * 0.12,
    backgroundColor: 'tomato',
    margin: 10,
    marginBottom: 0,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '900',
  },
});

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
const {width} = Dimensions.get('window');
const Setting = () => {
  const navigation = useNavigation();
  const handleReset = async () => {
    await removeItem('onboarded');
    navigation.navigate('Onboarding');
  };
  return (
    <View style={styles.container}>
      <View style={styles.list0}>
        <TouchableOpacity style={styles.text} onPress={handleReset}>
          <Text style={styles.txt}>Dark Mode</Text>
        </TouchableOpacity>
        <ToggleSwitch
          isOn={false}
          onColor="#634fc9"
          offColor="#ecf0f1"
          labelStyle={styles.tog}
          size="medium"
          onToggle={isOn => console.log('changed to : ', isOn)}
        />
      </View>
      <View style={styles.list}>
        <TouchableOpacity onPress={handleReset}>
          <Text style={styles.tt}>Logout</Text>
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
    height: width * 0.15,
    backgroundColor: 'white',
    margin: 10,
    marginBottom: 0,
    borderRadius: 10,
    alignItems: 'center',
    fontWeight: '900',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  text: {flex: 10},
  txt: {
    color: '#000',
    fontSize: 19,
    fontWeight: '600',
  },
  tt: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '800',
  },
  toggle: {flex: 2},
  list: {
    height: width * 0.15,
    backgroundColor: 'tomato',
    margin: 10,
    marginBottom: 0,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '900',
  },
  tog: {
    color: 'black',
    fontWeight: '900',
  },
});

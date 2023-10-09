import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {setItem} from '../utils/asyncStorage';

const {width} = Dimensions.get('window');
export default function OnboardingScreen() {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate('Home');
    setItem('onboarded', '1');
  };

  const doneButton = ({...props}) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Authenticate</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={doneButton}
        bottomBarHighlight={false}
        containerStyles={styles.cs}
        pages={[
          {
            backgroundColor: '#ffb5a7',
            image: (
              <View>
                <LottieView
                  style={styles.lottie}
                  source={require('../assets/animations/compass.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Welcome to Marvel!',
            subtitle:
              'Explore with a wide range of Marvel characters and share them!',
          },
          {
            backgroundColor: '#d9ed92',
            image: (
              <View>
                <LottieView
                  style={styles.lottie}
                  source={require('../assets/animations/ui.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'User Interface',
            subtitle: 'Clean app UI helps retain the user engagement.',
          },
          {
            backgroundColor: '#fef3c7',
            image: (
              <View>
                <LottieView
                  style={styles.lottie}
                  source={require('../assets/animations/navigation&routing.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Navigation & Routing',
            subtitle:
              'This have a proper implementation of Navigation & Routing in RN.',
          },
          {
            backgroundColor: '#94d2bd',
            image: (
              <View>
                <LottieView
                  style={styles.lottie}
                  source={require('../assets/animations/api.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Marvel API',
            subtitle:
              'This application is using Marvel Comic API & can be used to perform various operations on them.',
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    backgroundColor: 'white',
    borderEndStartRadius: 30,
    borderTopStartRadius: 30,
    padding: 20,
  },
  cs: {paddingHorizontal: 20},
});

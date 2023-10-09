import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');
const Info = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.image}>
          <Image
            style={styles.img}
            source={require('../../assets/images/assasin.png')}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.text}>Ishan Mishra</Text>
          <Text>React Native Developer</Text>
          <View style={styles.info}>
            <Text style={styles.text1}>ishan_mishra@icloud.com</Text>
            <Text style={styles.text1}>+91-95545-67774</Text>
          </View>
          <View style={styles.icons}>
            <Image
              style={styles.ico}
              source={require('../../assets/icons/github_733609.png')}
            />
            <Image
              style={styles.ico}
              source={require('../../assets/icons/linkedin_733617.png')}
            />
          </View>
          <View style={styles.icons}>
            <Image
              style={styles.ico}
              source={require('../../assets/icons/typescript.png')}
            />
            <Image
              style={styles.ico}
              source={require('../../assets/icons/atom.png')}
            />
            <Image
              style={styles.ico}
              source={require('../../assets/icons/js.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    margin: 17,
    borderRadius: 20,
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  img: {
    height: width * 0.65,
    width: width * 0.65,
  },
  details: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    paddingTop: 20,
    fontSize: 35,
    fontWeight: 'bold',
  },
  icons: {
    flex: 2,
    flexDirection: 'row',
  },
  ico: {
    height: width * 0.07,
    width: width * 0.07,
    margin: 20,
    marginVertical: -10,
    marginTop: 0,
  },
  info: {
    flex: 2,
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  text1: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 0,
    paddingBottom: 10,
  },
});

export default Info;

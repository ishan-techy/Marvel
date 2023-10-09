import React from 'react';
import {
  Image,
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native';
const {width} = Dimensions.get('window');

const API = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
          <View style={styles.img}>
            <Image
              style={styles.img}
              source={require('../../assets/images/iron-man.jpg')}
            />
          </View>
          <View style={styles.detail}>
            <View style={styles.detailContainer}>
              <Text style={styles.heading}>Iron Man</Text>
              <Text style={styles.subName}>Tony Stark</Text>
              <Text style={styles.intro}>
                With genius and gadgets, I am Iron Man, armor-clad defender.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.img}>
            <Image
              style={styles.img}
              source={require('../../assets/images/hulk.webp')}
            />
          </View>
          <View style={styles.detail}>
            <View style={styles.detailContainer}>
              <Text style={styles.heading}>Hulk</Text>
              <Text style={styles.subName}>Bruce Banner</Text>
              <Text style={styles.intro}>
                In rage and might, I'm the Hulk, smashing foes with strength.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.img}>
            <Image
              style={styles.img}
              source={require('../../assets/images/spider-man.jpeg')}
            />
          </View>
          <View style={styles.detail}>
            <View style={styles.detailContainer}>
              <Text style={styles.heading}>Spider Man</Text>
              <Text style={styles.subName}>Peter Parker</Text>
              <Text style={styles.intro}>
                Swinging through the city, I'm Spider-Man, your friendly
                neighborhood hero.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.img}>
            <Image
              style={styles.img}
              source={require('../../assets/images/captian-america.jpg')}
            />
          </View>
          <View style={styles.detail}>
            <View style={styles.detailContainer}>
              <Text style={styles.heading}>Captian America</Text>
              <Text style={styles.subName}>Steve Rogers</Text>
              <Text style={styles.intro}>
                Shield in hand, I'm Captain America, symbol of justice and
                freedom.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.img}>
            <Image
              style={styles.img}
              source={require('../../assets/images/thor.jpg')}
            />
          </View>
          <View style={styles.detail}>
            <View style={styles.detailContainer}>
              <Text style={styles.heading}>Thor</Text>
              <Text style={styles.subName}>Thor Odinson</Text>
              <Text style={styles.intro}>
                Mjolnir's power, I am Thor, thunder god of Asgard's realm.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.img}>
            <Image
              style={styles.img}
              source={require('../../assets/images/doctor-strange.jpg')}
            />
          </View>
          <View style={styles.detail}>
            <View style={styles.detailContainer}>
              <Text style={styles.heading}>Doctor Strange</Text>
              <Text style={styles.subName}>Stephen Strange</Text>
              <Text style={styles.intro}>
                Master of mystic arts, Doctor Strange, protector of dimensions
                unseen.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.img}>
            <Image
              style={styles.img}
              source={require('../../assets/images/black-panther.jpg')}
            />
          </View>
          <View style={styles.detail}>
            <View style={styles.detailContainer}>
              <Text style={styles.heading}>Black Pnather</Text>
              <Text style={styles.subName}>T'Challa</Text>
              <Text style={styles.intro}>
                Wakanda's king, Black Panther, stealth and strength combined
                with honor.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  card: {
    height: width * 0.5,
    borderRadius: 10,
    margin: 14,
  },
  img: {
    width: width * 0.32,
    height: width * 0.45,
    borderRadius: 20,
    zIndex: 999,
    borderWidth: 2,
    borderColor: 'white',
  },
  detail: {
    position: 'absolute',
    backgroundColor: 'white',
    marginLeft: width * 0.2,
    width: width * 0.83,
    height: width * 0.45,
    bottom: 0,
    right: 0,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 2,
  },
  detailContainer: {
    flex: 1,
    marginVertical: 20,
    marginLeft: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  heading: {
    color: '#000',
    fontSize: 24,
    marginTop: 10,
    fontWeight: 'bold',
  },
  subName: {
    color: 'grey',
  },
  intro: {
    color: '#000',
    marginTop: 10,
  },
});

export default API;

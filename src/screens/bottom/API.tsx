import React, {Fragment} from 'react';
import {
  Image,
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native';
const {width, height} = Dimensions.get('window');

const yosemite =
  'https://images.unsplash.com/photo-1548625361-1adcab316530?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
const islandBali =
  'https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80';

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
              <Text style={{color: 'grey'}}>Tony Stark</Text>
              <Text style={{marginTop: 10}}>
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
              <Text style={{color: 'grey'}}>Bruce Banner</Text>
              <Text style={{marginTop: 10}}>
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
              <Text style={{color: 'grey'}}>Peter Parker</Text>
              <Text style={{marginTop: 10}}>
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
              <Text style={{color: 'grey'}}>Steve Rogers</Text>
              <Text style={{marginTop: 10}}>
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
              <Text style={{color: 'grey'}}>Thor Odinson</Text>
              <Text style={{marginTop: 10}}>
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
              <Text style={{color: 'grey'}}>Stephen Strange</Text>
              <Text style={{marginTop: 10}}>
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
              <Text style={{color: 'grey'}}>T'Challa</Text>
              <Text style={{marginTop: 10}}>
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
    backgroundColor: '#F9F9F9',
  },
  card: {
    height: width * 0.5,
    borderRadius: 10,
    margin: 14,
    shadowColor: '#171717',
    shadowOffset: {width: -7, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 5,
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
    shadowColor: '#171717',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
    fontSize: 24,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default API;

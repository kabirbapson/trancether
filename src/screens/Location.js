import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ImageBackground,
  View,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../../assets/colors';

export default function Location({}) {
  return (
    <ImageBackground
      source={require('../assets/images/map_pant.jpg')}
      blurRadius={1}
      resizeMode="cover"
      style={{flex: 1, justifyContent: 'flex-end'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconView}>
            <Feather
              style={styles.featherIcon}
              name="arrow-left"
              color="#FFFFFF"
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconView}>
            <Feather
              style={styles.featherIcon}
              color="#FFFFFF"
              name="sliders"
              size={30}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.searchLocation}>
          <TouchableOpacity>
            <Feather
              style={styles.featherIcon}
              color="#264653"
              name="map-pin"
              size={20}
            />
          </TouchableOpacity>
          <View style={styles.searchInput}>
            <TextInput
              style={styles.searchTextInput}
              placeholder="What are you looking for... I"
              textAlign="center"
              placeholderTextColor="#264653"
            />
          </View>
          <TouchableOpacity>
            <Feather
              style={styles.featherIcon}
              color="#264653"
              name="search"
              size={20}
            />
          </TouchableOpacity>
        </View>
        <Text />
        <Text style={{color: 'red', fontSize: 24}}>
          Location Maps will be displayed here
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // backgroundColor: '#e5e5e5',
    flex: 1,
  },
  header: {
    marginHorizontal: 20,
    marginTop: 20,
    width: 322,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    backgroundColor: '#264653',
    borderRadius: 20,
  },
  searchLocation: {
    backgroundColor: '#F4F4F4',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    width: 320,
    height: 40,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchTextInput: {
    height: 30,
    width: 182,
    marginHorizontal: 40,
    padding: 0,
  },
});

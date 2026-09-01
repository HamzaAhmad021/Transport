import React, {useRef, useState} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import styles from './style';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import {COLORS} from '../../../Assests/Themes';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import CustomAutoPlaces from '../../../Components/CustomAutoPlaces';
import CrossHair from 'react-native-vector-icons/FontAwesome6';

const MapScreen = ({navigation}) => {
  const mapRef = useRef(null);
  const [googleLocation, setGoogleLocation] = useState('');
  const [region, setRegion] = useState(null);

  const currentLocation = {
    latitude: 31.530522590102716,
    longitude: 74.37002440588829,
    latitudeDelta: 8.922,
    longitudeDelta: 8.921,
  };

  const handlePlaceSelected = (data, location) => {
    if (location) {
      const newRegion = {
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      };
      setGoogleLocation(data.description);
      setRegion(newRegion);
      mapRef.current?.animateToRegion(newRegion, 1000);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={'#CE6800'}
      />
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowIcon name="arrowleft" size={30} color={COLORS.white} />
          </TouchableOpacity>
          <Text style={styles.title}>Select Location</Text>
        </View>
      </View>
      <MapView
        ref={mapRef}
        style={{width: '100%', height: '100%'}}
        initialRegion={currentLocation}
      />
      <View
        style={{
          flex: 1,
          zIndex: 100,
          position: 'absolute',
          top: 65,
          left: 0,
          right: 0,
        }}>
        <CustomAutoPlaces
          placeholder={'Search or Enter a Location'}
          value={googleLocation}
          onChangeText={setGoogleLocation}
          onPlaceSelected={handlePlaceSelected}
        />
      </View>
      <TouchableOpacity
        style={styles.locationIcon}
        >
        <CrossHair name="location-crosshairs" size={25} color={'#CE6800'} />
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
};

export default MapScreen;

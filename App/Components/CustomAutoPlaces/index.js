import React, {useRef} from 'react';
import {View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './style';
import 'react-native-get-random-values';
import { COLORS } from '../../Assests/Themes';

const CustomAutoPlaces = ({
  placeholder,
  onPlaceSelected,
  onChangeText,
  value,
}) => {
  const ref = useRef();
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        ref={ref}
        placeholder={placeholder}
        fetchDetails={true}
        onPress={(data, details = null) => {
          if (onPlaceSelected && details?.geometry?.location) {
            onPlaceSelected(data, details.geometry.location);
          }
        }}
        query={{
          key: 'AIzaSyCjYlp96xqkPNrogmOggYeiJAZuCH08KEY',
          language: 'en',
        }}
        styles={{
          textInputContainer: {
            flexDirection: 'row',
            borderRadius: 8,
            backgroundColor: COLORS.white,
            paddingHorizontal: 10
          },
          textInput: {
            ...styles.input,
            paddingLeft: 0,
          },
          listView: styles.listView,
        }}
        textInputProps={{
          placeholderTextColor: COLORS.grey,
          onChangeText: onChangeText,
          value: value,
          cursorColor: COLORS.darkBlue,
        }}
        /* renderLeftButton={() => (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <LocationIcon
              name="location-pin"
              size={25}
              color={COLORS.darkBlue}
              marginLeft={5}
            />
          </View>
        )}*/
        /*renderRightButton={() => (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ProfilePic width={35} height={35} marginRight={5} />
          </View>
        )}*/
      />
    </View>
  );
};

export default CustomAutoPlaces;

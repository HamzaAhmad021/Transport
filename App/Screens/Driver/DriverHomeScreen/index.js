import React, {useRef, useCallback, useState, useEffect} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import styles from './style';
import MenuIcon from 'react-native-vector-icons/Feather';
import {COLORS} from '../../../Assests/Themes';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import DotIcon from 'react-native-vector-icons/FontAwesome5';
import LocationIcon from 'react-native-vector-icons/Entypo';
import RupeeIcon from 'react-native-vector-icons/FontAwesome6';
import {NavigationRoutes} from '../../../Navigations/NavigationRoutes';
import Icon from 'react-native-vector-icons/AntDesign';
import MapView from 'react-native-maps';
import MessageIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Circle from '../../../Assests/Svg/Circle.svg';
import LocationSvg from '../../../Assests/Svg/Vector.svg';
import DraggableArrowBox from '../../../Components/DraggableArrowBox';

const DriverHomeScreen = ({navigation}) => {
  const [isAdvanceBooking, setIsAdvanceBooking] = useState(false);
  const bottomSheetRef = useRef(null);
  const mapRef = useRef(null);

  const [currentLocation, setCurrentLocation] = useState({
    latitude: 31.530522590102716,
    longitude: 74.37002440588829,
    latitudeDelta: 8.922,
    longitudeDelta: 8.921,
  });

  /* const handleMapOpen = () => {
    navigation.navigate(NavigationRoutes.MapScreen);
  };*/

  const handleSheetChanges = useCallback(index => {}, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={COLORS.white}
      />
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <TouchableOpacity
            style={styles.iconBack}
            onPress={() => navigation.navigate(NavigationRoutes.DriverHistory)}>
            <MenuIcon
              name="menu"
              size={22}
              color={COLORS.grayScale}
              marginLeft={8}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Welcome Salman!</Text>
        </View>
      </View>

      <MapView
        ref={mapRef}
        style={{width: '100%', height: '100%'}}
        initialRegion={currentLocation}
      />
      <TouchableOpacity
        style={styles.message}
        onPress={() => navigation.navigate(NavigationRoutes.ChatScreen)}>
        <MessageIcon name="message" size={30} color={COLORS.white} />
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={['52%']}
        backgroundStyle={{
          backgroundColor: COLORS.white,
          borderRadius: 20,
        }}
        handleIndicatorStyle={{backgroundColor: COLORS.grey}}
        style={{zIndex: 10000}}>
        <BottomSheetView style={styles.contentContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.contentText}>On Way</Text>
          </View>

          <View style={styles.boxBack}>
            <View style={{flexDirection: 'row'}}>
            <Circle />
              <View style={{flex: 1, marginLeft: 5}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.pickText}>Pickup</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'space-between',
                      marginRight: 50,
                    }}>
                    <Text style={styles.timeText}>07:45AM</Text>
                    <View style={styles.lineTwo} />
                    <Text style={styles.timeText}>9.96KM</Text>
                    <View style={styles.lineTwo} />
                    <Text style={styles.timeText}>60 Mins</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Text style={styles.addressText}>
                    My Home mangala road, KMR Estates, Kondapur, Hyderabad,
                    Telangana, India
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.boxBack}>
            <View style={{flexDirection: 'row', marginLeft: 5}}>
              <LocationSvg/>
              <View style={{flex: 1, marginLeft: 5}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.pickText}>Destination</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Text style={styles.timeText}>35.56KM</Text>
                    <View style={styles.lineTwo} />
                    <Text style={styles.timeText}>60 Mins</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Text style={styles.addressText}>
                    Pride Honda, Service Road, Silicon Valley, Madhapur,
                    Telangana, India
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.boxBack}>
            <View style={{flexDirection: 'row'}}>
              <RupeeIcon
                name="indian-rupee-sign"
                size={17}
                color={'green'}
                marginTop={7}
                marginLeft={4}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginLeft: 10,
                  alignItems: 'center',
                }}>
                <View style={{marginVertical: 5}}>
                  <Text style={styles.amountText}>$1,500</Text>
                  <Text style={styles.estimatedText}>
                    Your estimated earnings
                  </Text>
                </View>
                <Text style={styles.dollarText}>+ $150</Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomButtonContainer}>
            <TouchableOpacity style={styles.ignoreButton}>
              <View>
                <Icon name="doubleleft" size={25} color="red" marginLeft={18} />
              </View>
              <Text style={styles.buttonText}>Ignore Booking</Text>
              <View >
              <DraggableArrowBox direction="left" color="red" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.acceptButton}>
              <View >
              <DraggableArrowBox direction="right" color="green" />
              </View>
              <Text style={styles.buttonText}>Accept Booking</Text>
              <View>
                <Icon
                  name="doubleright"
                  size={25}
                  color="green"
                  marginRight={15}
                />
              </View>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default DriverHomeScreen;

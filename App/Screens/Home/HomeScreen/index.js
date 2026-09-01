import React, {useRef, useState, useEffect} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import styles from './style';
import CrossIcon from 'react-native-vector-icons/AntDesign';
import MenuIcon from 'react-native-vector-icons/Feather';
import LightningIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LocationIcon from 'react-native-vector-icons/Entypo';
import RupeeIcon from 'react-native-vector-icons/FontAwesome6';
import TimerIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Circle from '../../../Assests/Svg/Circle.svg';
import Cartaxi from '../../../Assests/Svg/Cartaxi.svg';
import MessageIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomInput from '../../../Components/CustomInput';
import CustomButton from '../../../Components/CustomButton';
import {COLORS} from '../../../Assests/Themes';
import {NavigationRoutes} from '../../../Navigations/NavigationRoutes';

const HomeScreen = ({navigation}) => {
  const [isAdvanceBooking, setIsAdvanceBooking] = useState(false);
  const [isRideConfirmed, setIsRideConfirmed] = useState(false);
  const [showDriverUI, setShowDriverUI] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const bottomSheetRef = useRef(null);
  const mapRef = useRef(null);

  const [currentLocation, setCurrentLocation] = useState({
    latitude: 31.530522590102716,
    longitude: 74.37002440588829,
    latitudeDelta: 8.922,
    longitudeDelta: 8.921,
  });

  const handleGrabNow = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setIsRideConfirmed(true);
      setShowDriverUI(true);
      bottomSheetRef.current?.snapToIndex(1);
    }, 2000);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={
          isSearching ? '#CE6800' : showDriverUI ? '#08875D' : COLORS.grayScale
        }
      />

      <View
        style={[
          styles.header,
          {backgroundColor: showDriverUI ? '#08875D' : COLORS.grayScale},
        ]}>
        <View style={styles.subHeader}>
          <TouchableOpacity
            style={styles.iconBack}
            onPress={() => navigation.navigate(NavigationRoutes.ProfileScreen)}>
            <MenuIcon
              name="menu"
              size={24}
              color={COLORS.white}
              marginLeft={6}
            />
          </TouchableOpacity>
          <Text style={styles.title}>
            {showDriverUI ? 'Driver on the way!' : 'Welcome Salman!'}
          </Text>
        </View>
      </View>

      {isSearching && (
        <View style={styles.searchingOverlay}>
          <MapView
            ref={mapRef}
            style={{width: '100%', height: '100%'}}
            initialRegion={currentLocation}
          />
          <View style={styles.overlay}>
            <View style={styles.topBar}>
              <TouchableOpacity>
                <CrossIcon
                  name="closecircleo"
                  size={22}
                  color={COLORS.white}
                  marginLeft={6}
                />
              </TouchableOpacity>
              <Text style={styles.searchingText}>Searching...</Text>
            </View>

            <View style={styles.markerCircle}>
              <View style={styles.pin} />
            </View>

            <View style={styles.footer}>
              <View style={styles.line} />
              <Text style={styles.waitText}>Waiting for Driver</Text>
            </View>
          </View>
        </View>
      )}

      <MapView
        ref={mapRef}
        style={{width: '100%', height: '100%'}}
        initialRegion={currentLocation}
      />

      {showDriverUI && (
        <TouchableOpacity
          style={styles.message}
          onPress={() => navigation.navigate(NavigationRoutes.ChatScreen)}>
          <MessageIcon name="message" size={30} color={COLORS.white} />
        </TouchableOpacity>
      )}

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={showDriverUI ? ['50%'] : ['73%']}
        backgroundStyle={{backgroundColor: COLORS.white, borderRadius: 20}}
        handleIndicatorStyle={{backgroundColor: COLORS.grey}}
        style={{zIndex: 10000}}>
        <BottomSheetView style={styles.contentContainer}>
          {!isRideConfirmed ? (
            <>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.contentText}>Let’s Go</Text>
              </View>

              <View style={styles.quickView}>
                <TouchableOpacity
                  style={[
                    styles.btnText,
                    !isAdvanceBooking && styles.activeBtn,
                  ]}
                  onPress={() => setIsAdvanceBooking(false)}>
                  <Text
                    style={[
                      styles.rideText,
                      !isAdvanceBooking && styles.activeText,
                    ]}>
                    Quick Ride
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.btnText, isAdvanceBooking && styles.activeBtn]}
                  onPress={() => setIsAdvanceBooking(true)}>
                  <Text
                    style={[
                      styles.bookText,
                      isAdvanceBooking && styles.activeText,
                    ]}>
                    Advance Booking
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.boxBack}>
                <View style={{flexDirection: 'row'}}>
                  <Circle />
                  <View style={{flex: 1, marginLeft: 5}}>
                    <Text style={styles.pickText}>Pickup Point</Text>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate(NavigationRoutes.MapScreen)
                      }>
                      <CustomInput
                        placeholder="Enter Address"
                        placeholderTextColor={COLORS.grey}
                        cursorColor={COLORS.golden}
                        additionalStyle={styles.inputStyle}
                        editable={false}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.boxBack}>
                <View style={{flexDirection: 'row'}}>
                  <LocationIcon name="location-pin" size={20} color={'red'} />
                  <View style={{flex: 1, marginLeft: 5}}>
                    <Text style={styles.pickText}>Drop off Point</Text>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate(NavigationRoutes.MapScreen)
                      }>
                      <CustomInput
                        placeholder="Enter Address"
                        placeholderTextColor={COLORS.grey}
                        cursorColor={COLORS.golden}
                        additionalStyle={styles.inputStyle}
                        editable={false}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <TouchableOpacity style={styles.boxBack}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Cartaxi />
                  <View style={styles.vehicleView}>
                    <View style={{marginVertical: 5}}>
                      <Text style={styles.pickText}>Choose vehicle</Text>
                      <Text style={styles.estimatedText}>
                        Choose vehicle as per need
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              {isAdvanceBooking && (
                <TouchableOpacity style={styles.boxBack}>
                  <View style={{flexDirection: 'row'}}>
                    <TimerIcon name="timer" size={19} color={'#007AFF'} marginTop={7}/>
                    <View style={{marginLeft: 5, marginVertical: 5}}>
                      <Text style={styles.pickText}>Choose Date and Time</Text>
                      <Text style={styles.chooseText}>
                        You can choose many types of vehicles as per need
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}

              <View style={styles.boxBack}>
                <View style={{flexDirection: 'row'}}>
                  <RupeeIcon
                    name="indian-rupee-sign"
                    size={17}
                    color={'green'}
                    marginTop={7}
                  />
                  <View style={styles.currencyView}>
                    <View style={{marginVertical: 5}}>
                      <Text style={styles.pickText}>$ --</Text>
                      <Text style={styles.estimatedText}>Estimated Fare</Text>
                    </View>
                    <Text style={styles.dollarText}>+ $--</Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity
                style={styles.lightView}
                onPress={handleGrabNow}>
                <LightningIcon
                  name="lightning-bolt"
                  size={20}
                  color={COLORS.white}
                />
                <Text style={styles.grabText}>Grab now</Text>
              </TouchableOpacity>
            </>
          ) : (
            showDriverUI && (
              <>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                  <Text style={styles.contentText}>2 mins Left!</Text>
                </View>

                <View style={styles.boxBack}>
                  <View style={{flexDirection: 'row'}}>
                    <Circle />
                    <View style={{flex: 1, marginLeft: 5}}>
                      <Text style={styles.pickText}>Pickup Point</Text>
                      <CustomInput
                        placeholder="Enter Address"
                        placeholderTextColor={COLORS.grey}
                        cursorColor={COLORS.golden}
                        additionalStyle={styles.inputStyle}
                        editable={false}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.boxBack}>
                  <View style={{flexDirection: 'row'}}>
                    <LocationIcon name="location-pin" size={20} color={'red'} />
                    <View style={{flex: 1, marginLeft: 5}}>
                      <Text style={styles.pickText}>Drop off Point</Text>
                      <CustomInput
                        placeholder="Enter Address"
                        placeholderTextColor={COLORS.grey}
                        cursorColor={COLORS.golden}
                        additionalStyle={styles.inputStyle}
                        editable={false}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.boxBack}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Cartaxi />
                    <View style={styles.vehicleView}>
                      <View style={{marginVertical: 5}}>
                        <Text style={styles.pickText}>22 wheeler truck</Text>
                        <Text style={styles.estimatedText}>vehicle</Text>
                      </View>
                    </View>
                  </View>
                </View>

                <CustomButton
                  title={'Cancel Booking'}
                  extraStyle={styles.extraStyle}
                  textStyle={styles.btnCustomText}
                  Cross={true}
                />
              </>
            )
          )}
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;

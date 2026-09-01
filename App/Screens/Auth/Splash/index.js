import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, Image, Dimensions} from 'react-native';
import styles from './style';
import {COLORS} from '../../../Assests/Themes';
import CarImage from '../../../Assests/Svg/CarImage';
import {NavigationRoutes} from '../../../Navigations/NavigationRoutes';
import DotPic from '../../../Assests/Svg/Dot.svg';
import CustomButton from '../../../Components/CustomButton';
import ImagePath from '../../../Assests/Image/ImagePath';
import Carousel from 'react-native-reanimated-carousel';

const Splash = ({navigation}) => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const width = Dimensions.get('screen').width;

  const slides = [
    {
      id: 1,
      image: ImagePath.CarImage,
      title: 'Making your drive best is our responsibility',
      text: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
      id: 2,
      image: ImagePath.CarImage,
      title: 'Making your drive best is our responsibility',
      text: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
      id: 3,
      image: ImagePath.CarImage,
      title: 'Making your drive best is our responsibility',
      text: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
      id: 4,
      image: ImagePath.CarImage,
      title: 'Making your drive best is our responsibility',
      text: 'Lorem ipsum dolor sit amet, consectetur',
    },
  ];

  const handlePassengerPress = () => {
    navigation.navigate(NavigationRoutes.Login);
  };

  const handleDriverPress = () => {
    navigation.navigate(NavigationRoutes.DriverLogin);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: showSplash ? COLORS.golden : COLORS.white},
      ]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={showSplash ? COLORS.golden : COLORS.white}
      />
      {showSplash ? (
        <View style={styles.picsView}>
          <CarImage />
          <View style={styles.titleView}>
            <Text style={styles.title}>Delive Eric</Text>
            <Text style={styles.text}>Transportation Services</Text>
          </View>
        </View>
      ) : (
        <View style={{flex: 1}}>
          <Carousel
            loop
            width={Dimensions.get('window').width}
            height={width * 1.42}
            autoPlay={true}
            autoPlayInterval={1000}
            data={slides}
            scrollAnimationDuration={300}
            onSnapToItem={index => setActiveIndex(index)}
            renderItem={({item}) => (
              <View style={styles.carouselItem}>
                <Image source={item.image} style={styles.splashCar} />
                <View style={styles.picView}>
                  <Text style={styles.headerTitle}>{item.title}</Text>
                  <Text style={styles.headertext}>{item.text}</Text>
                </View>
              </View>
            )}
          />
          <View style={styles.slideView}>
            {slides.map((_, index) => (
              <View
                key={index}
                style={{
                  width: index === activeIndex ? 30 : 11,
                  height: 11,
                  borderRadius: 6,
                  marginHorizontal: 5,
                  backgroundColor:
                    index === activeIndex ? COLORS.golden : 'transparent',
                  borderWidth: 1,
                  borderColor:
                    index === activeIndex ? COLORS.golden : COLORS.black,
                }}
              />
            ))}
          </View>
          <View style={styles.screen}>
            <CustomButton
              title={'Continue as Passenger'}
              extraStyle={styles.btnStyle}
              Arrow={true}
              onPress={handlePassengerPress}
              isButtonEnabled={isButtonEnabled}
            />
            <CustomButton
              title={'Continue as Driver'}
              extraStyle={styles.btnExtraStyle}
              Arrow={true}
              textStyle={styles.btnText}
              arrowColor={COLORS.golden}
              onPress={handleDriverPress}
              isButtonEnabled={isButtonEnabled}
            />
          </View>
          <Text style={styles.agreementText}>
            By continuing, you agree that you have read and accept our
            <Text style={styles.agreement}> T&Cs</Text> and{' '}
            <Text style={styles.agreement}>Privacy Policy</Text>
          </Text>
        </View>
      )}
    </View>
  );
};

export default Splash;

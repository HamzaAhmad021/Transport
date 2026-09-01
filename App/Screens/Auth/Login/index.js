import React, {useState} from 'react';
import {View, Text, StatusBar, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import {NavigationRoutes} from '../../../Navigations/NavigationRoutes';
import {COLORS} from '../../../Assests/Themes';
import ImagePath from '../../../Assests/Image/ImagePath';
import CustomButton from '../../../Components/CustomButton';
import FaceBookIcon from '../../../Assests/Svg/Facebook.svg';
import GoogleIcon from '../../../Assests/Svg/Google.svg';
import Iphone from '../../../Assests/Svg/Iphone.svg';

const Login = ({navigation}) => {
  const handlePhonePress = () => {
    navigation.navigate(NavigationRoutes.Phone);
  };

  const handleEmailPress = () => {
    navigation.navigate(NavigationRoutes.Email);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={COLORS.white}
      />
      <View style={styles.screen}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowIcon name="arrowleft" size={30} color={COLORS.grayScale} />
        </TouchableOpacity>
        <View style={styles.titleView}>
          <Text style={styles.title}>Continue with</Text>
          <Text style={styles.text}>
            We’ll text a code to verify your phone number
          </Text>
        </View>
        <CustomButton
          title={'Continue with Phone'}
          Arrow={true}
          extraStyle={styles.btnExtraStyle}
          onPress={handlePhonePress}
        />
        <CustomButton
          title={'Continue with Email'}
          Arrow={true}
          extraStyle={styles.btnStyle}
          textStyle={styles.btnText}
          arrowColor={COLORS.golden}
          onPress={handleEmailPress}
        />
        <Text style={styles.orText}>OR</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 20,
          }}>
          <TouchableOpacity style={styles.iconBack}>
            <GoogleIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBack}>
            <FaceBookIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBack}>
            <Iphone />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.backPic}>
        <Image source={ImagePath.Car} style={styles.loginCar} />
      </View>
    </View>
  );
};
export default Login;

import React, {useState} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import styles from './style';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../../Assests/Themes';
import CustomButton from '../../../Components/CustomButton';
import {OtpInput} from 'react-native-otp-entry';
import {NavigationRoutes} from '../../../Navigations/NavigationRoutes';

const PhoneOtp = ({navigation}) => {
  const [otp, setOtp] = useState('');

  const handleVerifyPress = () => {
    navigation.navigate(NavigationRoutes.OnBoarding);
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
        <Text style={styles.title}>Verify Phone Number</Text>
        <Text style={styles.text}>Please enter the 4 digit code sent to</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.phoneText}>+91 82386 58110</Text>
          <Text style={styles.text}> through SMS</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(NavigationRoutes.Phone)}>
          <Text style={styles.editText}>Edit your phone number?</Text>
        </TouchableOpacity>
        <OtpInput
          numberOfDigits={4}
          onTextChange={text => setOtp(text)}
          focusColor={COLORS.golden}
          borderColor={COLORS.golden}
          theme={{
            pinCodeTextStyle: {fontSize: 20, color: COLORS.black},
            pinCodeContainerStyle: {
              marginVertical: 30,
              width: '22%',
              backgroundColor: COLORS.white,
              borderWidth: 1,
            },
          }}
        />
      </View>
      <View style={styles.note}>
        <Text style={styles.descrip}>
          Haven't got the confirmation code yet?{' '}
          <Text style={styles.noteText}>Resend</Text>
        </Text>
        <CustomButton
          title={'Verify Code'}
          extraStyle={styles.btnStyle}
          onPress={handleVerifyPress}
        />
      </View>
    </View>
  );
};

export default PhoneOtp;

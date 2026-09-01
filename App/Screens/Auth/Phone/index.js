import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import styles from './style';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../../Assests/Themes';
import CustomButton from '../../../Components/CustomButton';
import CustomInput from '../../../Components/CustomInput';
import {CountryPicker} from 'react-native-country-codes-picker';
import {NavigationRoutes} from '../../../Navigations/NavigationRoutes';

const Phone = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    dial_code: '+44',
    flag: '🇬🇧',
  });

  const handleVerifyPress = () => {
    if (isButtonEnabled) {
      navigation.navigate(NavigationRoutes.PhoneOtp);
    }
  };

  useEffect(() => {
    if (phone.replace(/\D/g, '').length >= 6) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [phone]);

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
        <Text style={styles.title}>Enter Phone number for verification</Text>
        <Text style={styles.text}>
          We’ll text a code to verify your phone number
        </Text>
        <View
          style={[
            styles.inputView,
            {flexDirection: 'row', alignItems: 'center'},
          ]}>
          <TouchableOpacity
            onPress={() => setShowPicker(true)}
            style={styles.countryPicker}>
            <Text style={styles.flag}>{selectedCountry.flag}</Text>
            <Text style={styles.dialCode}>{selectedCountry.dial_code}</Text>
          </TouchableOpacity>
          <CustomInput
            placeholder={'0300 0000 000'}
            placeholderTextColor={COLORS.lightgrey}
            additionalStyle={[styles.inputExtra]}
            keyboardType={'numeric'}
            cursorColor={COLORS.golden}
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        <CountryPicker
          show={showPicker}
          pickerButtonOnPress={item => {
            setSelectedCountry(item);
            setShowPicker(false);
          }}
          style={{
            modal: {
              height: 500,
            },
          }}
        />
      </View>

      <View style={styles.note}>
        <Text style={styles.noteText}>
          Note:
          <Text style={styles.descrip}>{' '}
            By proceeding, you consent to get calls, WhatsApp or SMS messages,
            including by automated means, from GoChauffeur and its affiliates to
            the number provided.
          </Text>
        </Text>
        <CustomButton
          title={'Get Verification Code'}
          extraStyle={[
            styles.btnStyle,
            {
              backgroundColor: isButtonEnabled
                ? COLORS.golden
                : COLORS.lightgrey,
            },
          ]}
          onPress={handleVerifyPress}
          isButtonEnabled={isButtonEnabled}
        />
      </View>
    </View>
  );
};

export default Phone;

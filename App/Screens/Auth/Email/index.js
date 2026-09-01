import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import styles from './style';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../../Assests/Themes';
import CustomButton from '../../../Components/CustomButton';
import CustomInput from '../../../Components/CustomInput';
import {NavigationRoutes} from '../../../Navigations/NavigationRoutes';

const Email = ({navigation}) => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [email, setEmail] = useState('');

  const handleVerifyPress = () => {
    if (isButtonEnabled) {
      navigation.navigate(NavigationRoutes.EmailOtp);
    }
  };

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsButtonEnabled(emailRegex.test(email));
  }, [email]);

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

        <Text style={styles.title}>Enter Email for verification</Text>
        <Text style={styles.text}>
          We’ll text a code to verify your email address
        </Text>
        <Text style={styles.emailText}>Email Address</Text>
        <CustomInput
          placeholder={'Enter email address'}
          placeholderTextColor={COLORS.lightgrey}
          additionalStyle={[styles.inputExtra]}
          cursorColor={COLORS.golden}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
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

export default Email;

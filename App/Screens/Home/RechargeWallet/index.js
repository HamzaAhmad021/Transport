import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import styles from './style';
import {COLORS, FONTS} from '../../../Assests/Themes';
import CustomInput from '../../../Components/CustomInput';
import CustomButton from '../../../Components/CustomButton';

const RechargeWallet = ({navigation}) => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const amountOptions = ['$250', '$500', '$750', '$100'];

  const handleAmountPress = amount => {
    setSelectedAmount(amount);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={COLORS.white}
      />
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowIcon name="arrowleft" size={27} color={COLORS.grayScale} />
          </TouchableOpacity>
          <Text style={styles.title}>Recharge Wallet</Text>
        </View>
      </View>
      <View style={styles.linetwo} />
      <View style={{marginVertical: 8}}>
        <Text style={styles.totalText}>Available Balance</Text>
        <Text style={styles.amountText}>$2,430.00</Text>
      </View>
      <View style={styles.screen}>
        <CustomInput
          cursorColor={COLORS.golden}
          keyboardType={'phone-pad'}
          additionalStyle={styles.inputExtra}
          value={selectedAmount}
          onChangeText={text => setSelectedAmount(text)}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginHorizontal: 15,
            marginBottom: 20,
          }}>
          {amountOptions.map((amount, index) => {
            const isSelected = selectedAmount === amount;
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.amountButton,
                  {
                    borderColor: isSelected ? COLORS.golden : COLORS.lightgrey,
                    borderWidth: 1,
                  },
                ]}
                onPress={() => handleAmountPress(amount)}>
                <Text
                  style={{
                    color: isSelected ? COLORS.golden : COLORS.grayScale,
                    fontWeight: isSelected ? 'bold' : 'normal',
                    fontFamily: FONTS.Nunito_SemiBold,
                    fontSize: 16,
                  }}>
                  {amount}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <CustomButton
          title={'Recharge Now'}
          extraStyle={styles.btnExtraStyle}
        />
      </View>
    </View>
  );
};

export default RechargeWallet;

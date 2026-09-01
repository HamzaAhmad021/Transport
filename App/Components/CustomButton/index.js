import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {COLORS} from '../../Assests/Themes';
import ArrowIcon from 'react-native-vector-icons/Feather';
import CrossIcon from 'react-native-vector-icons/AntDesign';

const CustomButton = ({
  title,
  onPress,
  extraStyle,
  textStyle,
  Arrow = false,
  arrowColor = COLORS.white,
  isButtonEnabled,
  focused,
  Cross = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: isButtonEnabled ? COLORS.orange : COLORS.lightgrey},
        extraStyle,
        focused,
      ]}
      disabled={false}
      onPress={onPress}>
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        {Arrow && <ArrowIcon name="arrow-right" size={20} color={arrowColor} />}
        {Cross && <CrossIcon name="closecircleo" size={20} color={'red'} />}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

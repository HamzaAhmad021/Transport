import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';
import { COLORS } from '../../Assests/Themes';

const CustomInput = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  placeholderTextColor,
  additionalStyle,
  cursorColor,
  maxLength,
  right = false,
  editable=true
}) => {
  return (
      <TextInput
        style={[styles.input, additionalStyle]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        additionalStyle={additionalStyle}
        placeholderTextColor={placeholderTextColor}
        cursorColor={cursorColor}
        maxLength={maxLength}
        editable={editable}
      />
  );
};

export default CustomInput;

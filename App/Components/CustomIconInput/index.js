import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Modal, Platform} from 'react-native';
import styles from './style';
import {COLORS} from '../../Assests/Themes';
import CalenderIcon from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-date-picker';

const CustomIconInput = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  placeholderTextColor,
  additionalStyle,
  cursorColor,
  maxLength,
  Calender = false,
  editable = true,
}) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleDateConfirm = (selectedDate) => {
    setOpen(false);
    setDate(selectedDate);
    onChangeText(selectedDate.toISOString().split('T')[0]); 
  };

  return (
    <>
      <TouchableOpacity
        style={styles.inputView}
        activeOpacity={Calender ? 0.7 : 1}
        onPress={() => {
          if (Calender) setOpen(true);
        }}>
        <TextInput
          style={[styles.input, additionalStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          keyboardType={keyboardType}
          placeholderTextColor={placeholderTextColor}
          cursorColor={cursorColor}
          maxLength={maxLength}
          editable={editable && !Calender} 
        />
        {Calender && (
          <CalenderIcon name="calendar-alt" size={20} marginTop={10} color={COLORS.grayScale}/>
        )}
      </TouchableOpacity>

      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={() => setOpen(false)}
        theme="light"
      />
    </>
  );
};

export default CustomIconInput;

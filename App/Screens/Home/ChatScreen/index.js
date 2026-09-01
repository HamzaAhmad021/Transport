import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './style';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../../Assests/Themes';
import CustomInput from '../../../Components/CustomInput';
import SendIcon from 'react-native-vector-icons/Ionicons';

const chatMessages = [
  {
    id: '1',
    sender: 'Me',
    text: 'Your truck have proper locking system?',
    time: '10:07 pm',
    date: 'YESTERDAY',
  },
  {
    id: '2',
    sender: 'Driver',
    text: 'Yes.. see your Tommorow',
    time: '10:08 pm',
    date: 'YESTERDAY',
  },
  {
    id: '3',
    sender: 'Me',
    text: 'where are you?',
    time: '09:07 am',
    date: 'TODAY',
  },
];

const renderDateSeparator = date => (
  <View style={styles.lineGroup}>
    <View style={styles.lineView} />
    <Text style={styles.lineText}>{date}</Text>
    <View style={styles.lineView} />
  </View>
);

const ChatScreen = ({navigation}) => {
  const renderItem = ({item, index}) => {
    const showDate = index === 0 || chatMessages[index - 1].date !== item.date;

    return (
      <>
        {showDate && renderDateSeparator(item.date)}
        <View
          style={[
            styles.messageBubble,
            item.sender === 'Me' ? styles.myMessage : styles.otherMessage,
          ]}>
          <Text
            style={[
              item.sender === 'Me' ? styles.nameText : styles.driverText,
            ]}>
            {item.sender}
          </Text>
          <Text
            style={[
              item.sender === 'Me' ? styles.message : styles.driverMessage,
            ]}>
            {item.text}
          </Text>
          <Text
            style={[item.sender === 'Me' ? styles.time : styles.driverTime]}>
            {item.time}
          </Text>
        </View>
      </>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={COLORS.white}
      />

      <View style={styles.header}>
        <View style={styles.titleView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowIcon name="arrowleft" size={30} color={COLORS.grayScale} />
          </TouchableOpacity>
          <Text style={styles.title}>Chat</Text>
        </View>
        <TouchableOpacity onPress={() => console.log('Call')}>
          <SendIcon name="call-outline" size={26} color={COLORS.grayScale} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={chatMessages}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.messageContainer}
        removeClippedSubviews={false}
      />

      <View style={styles.inputContainer}>
        <CustomInput
          placeholder={'Write a message to driver'}
          additionalStyle={styles.input}
          placeholderTextColor={COLORS.lightgrey}
        />
        <TouchableOpacity style={styles.sendButton}>
          <SendIcon name="send-sharp" size={23} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

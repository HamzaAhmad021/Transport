import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import {COLORS} from '../../../Assests/Themes';
import RepeatIcon from '../../../Assests/Svg/Repeat.svg';
import Circle from '../../../Assests/Svg/Circle.svg';
import {NavigationRoutes} from '../../../Navigations/NavigationRoutes';

const item = [
  {
    id: '1',
    duration: '4 Hours',
    type: 'Round Trip',
    acceptWindow: '9:15AM - 9:35AM',
    time: '05:00 PM',
    date: 'Today',
    minEarn: '$250',
    address: '108, Auchandi Bawana Rd, Bawana Village',
    isPriority: true,
  },
  {
    id: '2',
    duration: '4 Hours',
    type: 'Round Trip',
    time: '05:00 PM',
    date: 'Today',
    minEarn: '$250',
    address: '108, Auchandi Bawana Rd, Bawana Village',
    isParking: true,
  },
  {
    id: '4',
    duration: '4 Hours',
    type: 'Round Trip',
    time: '05:00 PM',
    acceptWindow: '9:15AM - 9:35AM',
    date: 'Today',
    minEarn: '$250',
    address: '108, Auchandi Bawana Rd, Bawana Village',
    isParking: true,
    isPriority: true,
  },
  {
    id: '5',
    duration: '4 Hours',
    type: 'Round Trip',
    time: '05:00 PM',
    date: 'Today',
    minEarn: '$250',
    address: '108, Auchandi Bawana Rd, Bawana Village',
    isParking: true,
  },
];

const itemCard = ({item}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.leftHeader}>
          <View style={styles.repeatIcon}>
            <RepeatIcon />
          </View>
          <View style={{marginLeft: 5}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.duration}>{item.duration}</Text>
              {item.isPriority && <Text style={styles.flash}>⚡</Text>}
            </View>
            <Text style={styles.tripType}>{item.type}</Text>
          </View>
        </View>
        <Text style={styles.time}>
          {item.time} {'\n'}
          {item.date}
        </Text>
      </View>
      {item.acceptWindow && (
        <Text style={styles.acceptText}>Accept within {item.acceptWindow}</Text>
      )}
      <View style={styles.earnContainer}>
        <Text style={styles.earnText}>Min Earn: {item.minEarn}</Text>
      </View>
      <View style={styles.line} />
      <View
        style={{flexDirection: 'row', marginHorizontal: 15, marginVertical: 5}}>
        <Circle />
        <Text style={styles.address}> {item.address}</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.cardFooter}>
        <TouchableOpacity>
          <Text style={styles.removeText}>Remove</Text>
        </TouchableOpacity>
        <View style={styles.lineTwo} />
        <TouchableOpacity>
          <Text style={styles.acceptButton}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DriverHistory = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() =>
            navigation.navigate(NavigationRoutes.ProfileScreen, {
              from: 'DriverHistory',
            })
          }>
          <View style={styles.iconBack}>
            <Icons
              name="menu"
              size={24}
              color={COLORS.grayScale}
              marginLeft={6}
            />
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.offlineButton}>Offline</Text>
        </View>
        <View style={{flex: 1}} />
      </View>
      <FlatList
        data={item}
        keyExtractor={item => item.id}
        renderItem={itemCard}
        contentContainerStyle={{paddingBottom: 16}}
        removeClippedSubviews={false}
      />
    </View>
  );
};
export default DriverHistory;

import React, {useCallback} from 'react';
import {View, Text, StatusBar, TouchableOpacity, FlatList} from 'react-native';
import styles from './style';
import {COLORS} from '../../../Assests/Themes';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import CalenderIcon from 'react-native-vector-icons/Ionicons';
import DotIcon from 'react-native-vector-icons/FontAwesome6';
import CarIcon from 'react-native-vector-icons/FontAwesome5';
import RouteIcon from 'react-native-vector-icons/FontAwesome5';
import ClockIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MoneyPic from '../../../Assests/Svg/moneys.svg';
import {NavigationRoutes} from '../../../Navigations/NavigationRoutes';
import FilterIcon from 'react-native-vector-icons/Ionicons';
import FrameCirlce from '../../../Assests/Svg/FrameCircle.svg';
import RedFrame from '../../../Assests/Svg/FrameCircleRed.svg';

const History = ({navigation}) => {
  const handleBoxPress = () => {
    navigation.navigate(NavigationRoutes.OrderDetails);
  };

  const historyData = [
    {
      id: '1',
      name: 'Nikolas Mcpherson',
      date: '31/01/2023',
      tripId: '#0CAC6C64',
      pickup: 'Bus Sta Upas, Majestic, Bengaluru, Karnataka',
      drop: 'M.G. Railway Colony, Majestic, Bengaluru',
      type: 'Round Trip',
      distance: '15.36km',
      duration: '3h 50min',
      amount: '$1,500',
    },
    {
      id: '2',
      name: 'Emma Johnson',
      date: '01/02/2023',
      tripId: '#0BAC7D55',
      pickup: 'Indiranagar, Bengaluru',
      drop: 'Whitefield, Bengaluru',
      type: 'One Way',
      distance: '12.00km',
      duration: '2h 10min',
      amount: '$1,200',
    },
    {
      id: '3',
      name: 'Emma Johnson',
      date: '01/02/2023',
      tripId: '#0BAC7D55',
      pickup: 'Indiranagar, Bengaluru',
      drop: 'Whitefield, Bengaluru',
      type: 'One Way',
      distance: '12.00km',
      duration: '2h 10min',
      amount: '$1,200',
    },
    {
      id: '4',
      name: 'Emma Johnson',
      date: '01/02/2023',
      tripId: '#0BAC7D55',
      pickup: 'Indiranagar, Bengaluru',
      drop: 'Whitefield, Bengaluru',
      type: 'One Way',
      distance: '12.00km',
      duration: '2h 10min',
      amount: '$1,200',
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.boxContainer} onPress={handleBoxPress}>
      <View style={styles.innerContainer}>
        <View style={styles.upperText}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.innerText}>
            <CalenderIcon name="calendar" size={18} color={COLORS.grayScale} />
            <Text style={styles.date}> {item.date}</Text>
          </View>
        </View>
        <Text style={styles.idText}>ID: {item.tripId}</Text>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <FrameCirlce />
          <Text style={styles.address}> {item.pickup} </Text>
        </View>
        <View style={styles.line} />
        <View style={{flexDirection: 'row'}}>
          <RedFrame />
          <Text style={styles.address}> {item.drop} </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 13,
          }}>
          <View style={{flexDirection: 'row'}}>
            <CarIcon name="car-side" size={16} color={COLORS.grayScale} />
            <Text style={styles.iconTexts}>{item.type}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <RouteIcon name="route" size={16} color={COLORS.grayScale} />
            <Text style={styles.iconTexts}>{item.distance}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <ClockIcon name="clock" size={16} color={COLORS.grayScale} />
            <Text style={styles.iconTexts}>{item.duration}</Text>
          </View>
        </View>
      </View>
      <View style={styles.linelast} />
      <View style={styles.totalView}>
        <MoneyPic />
        <Text style={styles.totalAmount}>{item.amount}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={COLORS.white}
      />
      <View style={styles.header}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowIcon name="arrowleft" size={27} color={COLORS.grayScale} />
            </TouchableOpacity>
            <Text style={styles.title}>History</Text>
          </View>
          <TouchableOpacity>
            <FilterIcon
              name="filter"
              size={25}
              marginTop={2}
              color={COLORS.grayScale}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.linetwo} />
      <View style={styles.screen}>
        <View style={styles.lineGroup}>
          <View style={styles.lineView} />
          <Text style={styles.lineText}>TODAY</Text>
          <View style={styles.lineView} />
        </View>

        <FlatList
          data={historyData}
          keyExtractor={item => item.id}
          removeClippedSubviews={false}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={styles.lineGroup}>
              <View style={styles.lineView} />
              <Text style={styles.lineText}>YESTERDAY</Text>
              <View style={styles.lineView} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default History;

import React, {useRef, useCallback} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Image,
} from 'react-native';
import styles from './style';
import {COLORS} from '../../../Assests/Themes';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import Profile from '../../../Assests/Svg/ProfilePic.svg';
import Rightarrow from 'react-native-vector-icons/AntDesign';
import ClockIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileIcon from 'react-native-vector-icons/Ionicons';
import ShareIcon from '../../../Assests/Svg/Share.svg';
import TaskIcon from 'react-native-vector-icons/FontAwesome';
import Logicon from 'react-native-vector-icons/Ionicons';
import {NavigationRoutes} from '../../../Navigations/NavigationRoutes';
import ImagePath from '../../../Assests/Image/ImagePath';
import CardPic from '../../../Assests/Svg/card-add.svg';
import MoneyPic from '../../../Assests/Svg/money-recive.svg';
import Money from '../../../Assests/Svg/money-send.svg';
import Stickypic from '../../../Assests/Svg/stickynote.svg';
import CalenderTick from '../../../Assests/Svg/calendar-tick.svg';
import Messagequestion from '../../../Assests/Svg/messagequestion.svg';
import Location from '../../../Assests/Svg/location.svg';

const ProfileScreen = ({navigation, route}) => {
  const fromDriverHome = route?.params?.from === 'DriverHistory';
  const itemLists = [
    {
      id: '1',
      icon: <ClockIcon name="clock" size={23} color={COLORS.golden} />,
      text: 'History',
      arrow: <Rightarrow name="right" size={22} color={COLORS.grey} />,
    },
    {
      id: '2',
      icon: <ShareIcon />,
      text: 'Refer and Earn',
      arrow: <Rightarrow name="right" size={22} color={COLORS.grey} />,
    },
    {
      id: '3',
      icon: <Messagequestion />,
      text: 'Help',
      arrow: <Rightarrow name="right" size={22} color={COLORS.grey} />,
    },
    {
      id: '4',
      icon: <Location />,
      text: 'My Location',
      arrow: <Rightarrow name="right" size={22} color={COLORS.grey} />,
    },
    {
      id: '5',
      icon: <TaskIcon name="tasks" size={21} color={COLORS.golden} />,
      text: 'Driver Instructions',
      arrow: <Rightarrow name="right" size={22} color={COLORS.grey} />,
    },
    {
      id: '6',
      icon: <Logicon name="log-out" size={28} color={'red'} />,
      text: 'Logout',
    },
  ];

  const renderData = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.renderList}
        onPress={() => handleItemPress(item.text)}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {item.icon}
          <View style={{marginLeft: 10}}>
            <Text
              style={[
                styles.listItem,
                {color: item.text === 'Logout' ? 'red' : COLORS.black},
              ]}>
              {item.text}
            </Text>
          </View>
        </View>
        {item.arrow}
      </TouchableOpacity>
    );
  };

  const handleItemPress = itemText => {
    switch (itemText) {
      case 'Current Booking':
        //navigation.navigate('BookingScreen');
        break;
      case 'History':
        navigation.navigate(NavigationRoutes.History);
        break;
      case 'My Account':
      //navigation.navigate('BookingScreen');
    }
  };

  const rechargeItem = () => {
    return (
      <TouchableOpacity
        style={{alignItems: 'center', flex: 1}}
        onPress={() => navigation.navigate(NavigationRoutes.RechargeWallet)}>
        <CardPic />
        <Text style={styles.walletText}>Recharge Wallet</Text>
      </TouchableOpacity>
    );
  };

  const walletItem = () => {
    return (
      <TouchableOpacity style={{alignItems: 'center', flex: 1}}>
        <Stickypic />
        <Text style={styles.walletText}>Wallet Statement</Text>
      </TouchableOpacity>
    );
  };

  const amountItem = () => {
    return (
      <TouchableOpacity style={{alignItems: 'center', flex: 1}}>
        <MoneyPic />
        <Text style={styles.walletText}>Recieved Amount</Text>
      </TouchableOpacity>
    );
  };

  const sendItem = () => {
    return (
      <TouchableOpacity style={{alignItems: 'center', flex: 1}}>
        <Money />
        <Text style={styles.walletText}>Send Amount</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={COLORS.grayScale}
      />
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowIcon name="arrowleft" size={27} color={COLORS.white} />
          </TouchableOpacity>
          <Text style={styles.title}>Profile</Text>
        </View>
        <TouchableOpacity
          style={styles.headerContent}
          onPress={() => navigation.navigate(NavigationRoutes.OnBoarding)}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <View>
              <Profile />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={styles.name}>Zakariya Yoder</Text>
              <Text style={styles.number}>+91 12345 67890</Text>
            </View>
          </View>
          <View>
            <Rightarrow
              name="right"
              size={25}
              color={COLORS.white}
              marginTop={8}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.screen}>
        <FlatList
          data={itemLists}
          keyExtractor={item => item.id}
          renderItem={renderData}
          ItemSeparatorComponent={() => <View style={styles.lineThree} />}
          removeClippedSubviews={false}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View
              style={{
                //paddingHorizontal: 40,
                //paddingVertical: 20,
                backgroundColor: '#F0F5FF',
              }}>
              <TouchableOpacity
                style={styles.cardView}
                onPress={() =>
                  navigation.navigate(NavigationRoutes.PaymentAmount)
                }>
                <TouchableOpacity>
                  <Text style={styles.totalText}>Total Balance</Text>
                  <Text style={styles.amountText}>$2,430.00</Text>
                </TouchableOpacity>
                <View style={styles.pic}>
                  <Image
                    resizeMode="contain"
                    source={ImagePath.Pattern}
                    style={{width: '100%', height: '100%', marginLeft: 75}}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.cardHalfView}>
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 15,
                  }}>
                  {rechargeItem()}
                  {walletItem()}
                  {sendItem()}
                  {amountItem()}
                </View>
              </View>
              {fromDriverHome && (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      backgroundColor: COLORS.white,
                      padding: 20,
                      paddingHorizontal: 40,
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text style={styles.totalEarning}>Total Earning</Text>
                      <Text style={styles.totalAmount}>$10,559.99</Text>
                    </View>
                    <View style={styles.lineTwo} />
                    <View>
                      <Text style={styles.totalEarning}>Total Trips</Text>
                      <Text style={styles.totalAmount}>504.89 km</Text>
                    </View>
                    <View style={styles.lineTwo} />
                    <View>
                      <Text style={styles.totalEarning}>Total Login Hrs</Text>
                      <Text style={styles.totalAmount}>289 Hrs</Text>
                    </View>
                  </View>

                  <View style={styles.linethree} />
                </>
              )}
            </View>
          }
        />
      </View>
    </View>
  );
};
export default ProfileScreen;

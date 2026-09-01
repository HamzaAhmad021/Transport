import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import Dot from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../../Assests/Themes';
import styles from './style';
import FrameCirlce from '../../../Assests/Svg/FrameCircle.svg';
import RedFrame from '../../../Assests/Svg/FrameCircleRed.svg';

const OrderDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowIcon name="arrowleft" size={27} color={COLORS.grayScale} />
          </TouchableOpacity>
          <Text style={styles.title}>#0CAC6C64</Text>
        </View>
      </View>

      <View style={styles.linetwo} />

      <View style={styles.screen}>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>PICKUP & DESTINATION</Text>
          <View style={styles.timelineItem}>
            <FrameCirlce/>
            <View style={styles.timelineTextContainer}>
              <Text style={styles.timelineBold}>
              Started : 01 Jan 202, 11:47AM
              </Text>
              <Text style={styles.timelineAddress}>
                Bus Sta Upas, Majestic, Bengaluru, Karnataka 560009
              </Text>
            </View>
          </View>
          <View style={styles.timelineItem}>
            <RedFrame/>
            <View style={styles.timelineTextContainer}>
              <Text style={styles.timelineBold}>
                Ended : 01 Jan 202, 01:14 PM
              </Text>
              <Text style={styles.timelineAddress}>
               M.G. Railway Colony, Majestic, Bengaluru, Karnataka 560023
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>BASIC DETAILS</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.label}>Trip ID: </Text>
            <Text style={styles.detailText}>#0CAC6C64</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 9,
            }}>
            <Text style={styles.label}>Trip Type: </Text>
            <Text style={styles.detailText}>Round Trip</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 9,
            }}>
            <Text style={styles.label}>Trip Distance: </Text>
            <Text style={styles.detailText}>89.36km</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 9,
            }}>
            <Text style={styles.label}>Trip Duration: </Text>
            <Text style={styles.detailText}>3h 00min</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 9,
            }}>
            <Text style={styles.label}>Vehicle Type: </Text>
            <Text style={styles.detailText}>Automatic - Sedan</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>ESTIMATED FARE DETAILS</Text>
          <View style={styles.estimatedText}>
            <Text style={styles.label}>Estimated Total Fare: </Text>
            <Text style={styles.label}>$1500</Text>
          </View>
          <View style={styles.lineThree} />
          <Text style={styles.earnedTitle}>Earned money from trip:</Text>
          <Text style={styles.earnedAmount}>$250</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderDetails;

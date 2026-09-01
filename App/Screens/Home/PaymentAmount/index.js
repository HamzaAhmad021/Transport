import React from 'react';
import {View, Text, StatusBar, TouchableOpacity, FlatList} from 'react-native';
import styles from './style';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../../Assests/Themes';

const DATA = [
  {
    month: 'JANUARY 2024',
    entries: [
      {
        type: 'Your Earning',
        refId: 'C079DB3D',
        amount: '+$873.01',
      },
      {
        type: 'Refund - Trip Issue',
        refId: 'C079DB3D-refund-C079DB3D',
        amount: '+$873.01',
      },
    ],
  },
  {
    month: 'FEBRUARY 2024',
    entries: [
      {
        type: 'Your Earning',
        refId: 'C079DB3D',
        amount: '+$873.01',
      },
      {
        type: 'Refund - Trip Issue',
        refId: 'C079DB3D-refund-C079DB3D',
        amount: '+$873.01',
      },
      {
        type: 'Your Earning',
        refId: 'C079DB3D',
        amount: '+$873.01',
      },
      {
        type: 'Refund - Trip Issue',
        refId: 'C079DB3D-refund-C079DB3D',
        amount: '+$873.01',
      },
    ],
  },
  {
    month: 'MARCH 2024',
    entries: [
      {
        type: 'Your Earning',
        refId: 'C079DB3D',
        amount: '+$873.01',
      },
      {
        type: 'Refund - Trip Issue',
        refId: 'C079DB3D-refund-C079DB3D',
        amount: '+$873.01',
      },
      {
        type: 'Your Earning',
        refId: 'C079DB3D',
        amount: '+$873.01',
      },
      {
        type: 'Refund - Trip Issue',
        refId: 'C079DB3D-refund-C079DB3D',
        amount: '+$873.01',
      },
    ],
  },
];

const PaymentAmount = ({navigation}) => {
  const renderSection = ({item}) => {
    return (
      <>
        <View style={styles.linetwo} />
        <View style={styles.lineGroup}>
          <View style={styles.lineView} />
          <Text style={styles.lineText}>{item.month}</Text>
          <View style={styles.lineView} />
        </View>
        {item.entries.map((entry, idx) => (
          <View key={idx}>
            <View style={styles.earningVew}>
              <View>
                <Text style={styles.earningText}>{entry.type}</Text>
                <Text style={styles.refID}>Reference ID: {entry.refId}</Text>
              </View>
              <Text style={styles.amount}>{entry.amount}</Text>
            </View>
            <View style={styles.lineThin} />
          </View>
        ))}
      </>
    );
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
          <Text style={styles.title}>Payment Amount</Text>
        </View>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderSection}
        keyExtractor={(item, index) => item.month + index}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={false}
      />
    </View>
  );
};

export default PaymentAmount;

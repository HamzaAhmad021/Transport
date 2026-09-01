import 'react-native-gesture-handler';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationRoutes} from './NavigationRoutes';
import Splash from '../Screens/Auth/Splash';
import Login from '../Screens/Auth/Login';
import Phone from '../Screens/Auth/Phone';
import PhoneOtp from '../Screens/Auth/PhoneOtp';
import Email from '../Screens/Auth/Email';
import EmailOtp from '../Screens/Auth/EmailOtp';
import OnBoarding from '../Screens/Auth/OnBoarding';
import HomeScreen from '../Screens/Home/HomeScreen';
import ProfileScreen from '../Screens/Home/ProfileScreen';
import History from '../Screens/Home/History';
import OrderDetails from '../Screens/Home/OrderDetails';
import PaymentAmount from '../Screens/Home/PaymentAmount';
import RechargeWallet from '../Screens/Home/RechargeWallet';
import DriverLogin from '../Screens/Auth/DriverLogin';
import MapScreen from '../Screens/Home/MapScreen';
import ChatScreen from '../Screens/Home/ChatScreen';
import DriverHomeScreen from '../Screens/Driver/DriverHomeScreen';
import DriverHistory from '../Screens/Driver/DriverHistory';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NavigationRoutes.Splash}>
        <Stack.Screen
          name={NavigationRoutes.Splash}
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.Login}
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.Phone}
          component={Phone}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.PhoneOtp}
          component={PhoneOtp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.Email}
          component={Email}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.EmailOtp}
          component={EmailOtp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.OnBoarding}
          component={OnBoarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.HomeScreen}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.ProfileScreen}
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.History}
          component={History}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.OrderDetails}
          component={OrderDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.PaymentAmount}
          component={PaymentAmount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.RechargeWallet}
          component={RechargeWallet}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.DriverLogin}
          component={DriverLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.MapScreen}
          component={MapScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.DriverHomeScreen}
          component={DriverHomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.DriverHistory}
          component={DriverHistory}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.ChatScreen}
          component={ChatScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
